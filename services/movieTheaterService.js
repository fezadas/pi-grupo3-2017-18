'use strict'

const configInfo = require('../cinemas.json')

module.exports = {getmovieTheaters, getAuditoriums}

function getmovieTheaters(cb){
    let movieTheaters = configInfo.map(elem => {
        return {
            id : elem.id,
            name : elem.name,
            city : elem.city
        }
    })
    cb(null, movieTheaters)
}

function getAuditoriums(id, cb){
    let cinema = configInfo.find(elem => elem.id == id)
    let auditoriums = cinema.auditorium.map( elem => {
        return {
            name : elem.name,
            rows : elem.rows,
            seats : elem.seats
        }
    })
    cb(null, auditoriums)
}