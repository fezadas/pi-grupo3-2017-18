'use strict'

const express = require('express')
const router = express.Router()

// Services
const moviesService = require('../services/moviesService.js')()

module.exports = router

/**
 * Pedido GET para obter um filme
 */
router.get('movies/:movieId', (req, resp, next)=>{
    const movieId = req.params.movieId
    moviesService.getMovie(movieId, (err, movie)=>{
        if(err) next(err)
        console.log(movie)
        //resp.render('movieView', movie)
    })
})