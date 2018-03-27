'use strict'

const configInfo = require('../cinemas.json')

module.exports = {getmovieTheaters, getAuditoriums,getCinemaInfo}

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

function getCinemaInfo(id, cb){
    let cinema = configInfo.find(elem => elem.id == id)
    let movies = cinema.auditorium.map(elem => {
        return elem.movie
    })
    cinema.movies = movies
    cb(null, cinema)
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