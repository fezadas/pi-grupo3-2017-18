'use strict'

const fs = require('fs')
const express = require('express')
const app = express()
const movieTheaterService = require('./services/movieTheaterService.js')
const auditoriumService = require('./services/auditoriumService.js')

const port = 8080
app.listen(port) 



app.get('/cinemas/:id/auditoriums', (req, resp, next)=>{
    const id = req.params.id
    movieTheaterService.getAuditoriums(id, (err, auditoriums) => {
        if(err) return next(err)
        console.log(auditoriums)
        //resp.render('CinView', cin)
    })
})

app.get('/cinemas/:id', (req, resp, next)=>{
    const id = req.params.id
    movieTheaterService.getCinemaInfo(id, (err, cinema) => {
        if(err) return next(err)
        console.log(cinema)
        //resp.render('CinView', cin)
    })
})

app.get('/cinemas', (req, resp, next)=>{
    movieTheaterService.getmovieTheaters((err, movieTheaters) => {
        if(err) return next(err)
        console.log(movieTheaters)
        //resp.render('CinView', cin)
    })
})

app.get('/cinemas/:idcin/auditoriums/:idaud', (req, resp, next)=>{
    const idcin = req.param.idcin 
    const idaud = req.param.idaud
    auditoriumService.getAuditoriumInfo(idcin, idaud, (err, auditorium) => {
        if(err) return next(err)
        console.log(auditorium)
    })
})


