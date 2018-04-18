'use strict'

const express = require('express')
const router = express.Router()

// Services
const movieTheaterService = require('../services/movieTheaterService.js')()
const auditoriumService = require('../services/auditoriumService.js')()
module.exports = router

//GET's
router.get('/cinema/new', (req, res) => { 
    res.render('cinemaNewView')
}) 

/**
 * Pedido GET para obter a sessão de um filme em exibição numa determinada sala de um cinema
 */
router.get('/cinemas/:id/auditoriums/:auditoriumId/movies/:movieId/session', (req, resp, next)=>{
    const cinId = req.params.id
    const auditoriumId = req.params.auditoriumId
    const movieId = req.params.movieId
    //movieTheaterService
    //TODO:
})

/**
 * Pedido GET para obter um sala de um cinema
 */
router.get('/cinemas/:id/auditoriums/:auditoriumId', (req, resp, next)=>{
    const cinemaId = req.param.id
    const auditoriumId = req.param.auditoriumId
    auditoriumService.getAuditoriumInfo(cinemaId, auditoriumId, (err, auditorium) => {
        if(err) return next(err)
        console.log(auditorium)
    })
})

/**
 * Pedido GET para obter as salas de um cinema
 */
router.get('/cinemas/:id/auditoriums', (req, resp, next)=>{
    const id = req.params.id
    movieTheaterService.getAuditoriums(id, (err, auditoriums) => {
        if(err) return next(err)
        console.log(auditoriums)
        //resp.render('CinView', cin)
    })
})

/**
 * Pedido GET para obter um filme de um cinema
 */
router.get('/cinemas/:id/movies/:movieId', (req, resp, next)=>{
    const cinId = req.params.id
    const movieId = req.params.movieId
    //movieTheaterService
    //TODO:
})

/**
 * Pedido Get para obter um cinema
 */
router.get('/cinemas/:id', (req, resp, next)=>{
    const id = req.params.id
    movieTheaterService.getCinemaInfo(id, (err, cinema) => {
        if(err) return next(err)
        const cin = {
            actionUrl:  `/cinemas/${cinema.id}`,
            cinemaInfo: cinema 
        }
        resp.render('cinemaView', cin)
    })
})

/**
 * Pedido GET para obter todos os cinemas
 */
router.get('/cinemas', (req, resp, next)=>{
    movieTheaterService.getMovieTheaters((err, movieTheaters) => {
        if(err) return next(err)
        const cinemas = {
            cinemas: movieTheaters
        }
        resp.render('cinemasView', cinemas)
    })
})


//POST's
router.post('/cinemas', (req, res, next)=>{
    const cinemaInfo = req.body
    if (!cinemaInfo || Number.isNaN(Number(cinemaInfo.id))){
        return res.sendStatus(400)
    }
    movieTheaterService.updateCinema(cinemaInfo,configInfo)
    res.redirect(303, `${req.originalUrl}/${cinemaInfo.id}`)
})


//PUT's
router.put('/cinemas/:id/auditoriums/:auditoriumId/movies/:movieId/session', (req, resp, next)=>{

})

router.put('/cinemas/:id/auditoriums/:auditoriumId', (req, resp, next)=>{
    
})

router.put('/cinemas/:id/movies/:movieId', (req, resp, next)=>{
    
})

router.put('/cinemas/:id', (req, resp, next)=>{
    
})