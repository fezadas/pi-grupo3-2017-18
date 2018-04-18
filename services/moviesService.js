'use strict'

const key = '3c48d755a76e67ef30a6d4b8778f6b27'

//Model
const Movie = require('./../model/Movie')

module.exports = init

function init(){
    return {
        getMovie,
        getMovies
    }

    /**
     * 
     * @param {*} path 
     * @param {*} cb 
     */
    function reqAsJson(path,cb) {
        req(path, (err, res, data) => {
            if(err) return cb(err)
            const obj = JSON.parse(data.toString())
            cb(null, obj)
        })
    }

    /**
     * Obter um filme específico
     * @param {*} movieId 
     * @param {*} cb 
     */
    function getMovie(movieId, cb){
        const path = `http://api.themoviedb.org/3/movie/${movieID}?api_key=${key}`
        reqAsJson(path, (err, res) =>{
            if(err) return cb(err)
            cb(null, new Movie(res))
        })
    }

    /**
     * Obter os filmes de um cinema
     * @param {*} cinema 
     * @param {*} movies 
     * @param {*} cb 
     */
    function getMovies(cinema, movies, cb){
        //TODO:
    }
}