'use strict'

const fs = require('fs')
const express = require('express')
const app = express()
const movieTheaterService = require('./services/movieTheaterService.js')
const auditoriumService = require('./services/auditoriumService.js')
const configInfo = require('./cinemas.json')

const port = 8080
app.listen(port) 

app.use((req, res, next) => {
    const oldEnd = res.end
    res.end = function (...args) { 
        console.log(`Serviced ${req.method} ${req.originalUrl} with status code ${res.statusCode}`)
        return oldEnd.call(this, ...args) 
    }
    next()
})
 
//app.use(express.static(path.join(root, 'static')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const hbs = require('hbs')

hbs.registerHelper('equals', (theOne, theOther) => theOne === theOther)
hbs.registerHelper('and', (theOne, theOther) => theOne && theOther)

hbs.registerPartials(__dirname + '/views/partials')

const router = express.Router()


app.get('/home', (req, resp) => {
        //if (err) throw err
        resp.render('home.hbs')
    })

app.get('/cinema/new', (req, res) => { res.render('cinemaNew.hbs')}) 

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
        resp.render('cinema.hbs',{
            actionUrl:  `/cinemas/${cinema.id}`,
            cinemaInfo: cinema 
        })
    })
})

app.get('/cinemas', (req, resp, next)=>{
    movieTheaterService.getmovieTheaters((err, movieTheaters) => {
        if(err) return next(err)
        console.log(movieTheaters)
        resp.render('cinemas.hbs', {cinemas: movieTheaters})
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

app.post('/cinemas', (req, res, next)=>{

    const cinemaInfo = req.body
    
    if (!cinemaInfo || Number.isNaN(Number(cinemaInfo.id)))
            return res.sendStatus(400)

    movieTheaterService.updateCinema(cinemaInfo,configInfo)
    res.redirect(303, `${req.originalUrl}/${cinemaInfo.id}`)
})

