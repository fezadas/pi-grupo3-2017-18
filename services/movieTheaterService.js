'use strict'

const configInfo = require('../cinemas.json')

module.exports = init

function init(){
    return {
        getMovieTheaters,
        getCinemaInfo,
        updateCinema, 
        getAuditoriums
    }

    /**
     * Obter a informação básica de todos os cinemas
     * @param {*} cb 
     */
    function getMovieTheaters(cb){
        let movieTheaters = configInfo.map(elem => {
            return {
                id : elem.id,
                name : elem.name,
                city : elem.city
            }
        })
        cb(null, movieTheaters)
    }

    /**
     * Obter informação de um cinema específico
     * @param {*} id 
     * @param {*} cb 
     */
    function getCinemaInfo(id, cb){
        let cinema = configInfo.find(elem => elem.id == id)
        if(cinema.auditorium){
        let movies = cinema.auditorium.map(elem => {
            return elem.movie
        })
        cinema.movies = movies
        }
        cb(null, cinema)
    }
    
    /**
     * Atualizar um cinema
     * @param {*} cin 
     * @param {*} configInfo 
     */
    function updateCinema(cin, configInfo) {
        let existingCin = configInfo.find(elem => elem.id == cin.id)
        if (!existingCin) {
            configInfo.push({
                id:Number(cin.id),
                name: cin.name,
                city:cin.city
            })
        }
        else{
        let idx = configInfo.findIndex(elem => elem.id == cin.id)
            configInfo[idx] = {
                id:cin.id,
                name: cin.name,
                city:cin.city
        }
        }
    }
    
    /**
     * Obter a informação de todas as salas de um determinado cinema
     * @param {*} id 
     * @param {*} cb 
     */
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
}
