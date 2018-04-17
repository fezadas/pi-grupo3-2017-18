'use strict'

const configInfo = require('../cinemas.json')

module.exports = {getAuditoriumInfo}


function getAuditoriumInfo(idcin, idaud, cb){
    let cinema = configInfo.find(elem => elem.id == idcin)
    let aud = cinema.auditorium.find(elem => elem.id == idaud)
    aud.lotation = aud.rows * aud.seats
    cb(null, aud)
}

