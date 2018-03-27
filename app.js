'use strict'

const fs = require('fs')
const express = require('express')
const app = express()
const movieTheaterService = require('./services/movieTheaterService.js')

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

app.get('/cinemas', (req, resp, next)=>{
    movieTheaterService.getmovieTheaters((err, movieTheaters) => {
        if(err) return next(err)
        console.log(movieTheaters)
        //resp.render('CinView', cin)
    })
})
