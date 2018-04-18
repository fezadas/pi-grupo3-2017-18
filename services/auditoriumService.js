'use strict'

const configInfo = require('../cinemas.json')

module.exports = init

function init(){
    return {getAuditoriumInfo}
    
    /**
     * Obter informação de uma determinada sala de um cinema
     * @param {*} idcin 
     * @param {*} idaud 
     * @param {*} cb 
     */
    function getAuditoriumInfo(cinemaId, auditoriumId, cb){
        let cinema = configInfo.find(elem => elem.id == cinemaId)
        let aud = cinema.auditorium.find(elem => elem.id == auditoriumId)
        aud.lotation = aud.rows * aud.seats
        cb(null, aud)
    }
}
