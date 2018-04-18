'use strict'

const fs = require('fs')
const hbs = require('hbs')
const path = require('path')
const favicon = require('serve-favicon')
const express = require('express')
const app = express()

const cinemaRouter = require('./routers/movieTheatreRouter')
//const moviesRouter = require('./routers/moviesRouter')

const port = 8081
app.listen(port) 

app.use((req, res, next) => {
    const oldEnd = res.end
    res.end = function (...args) { 
        console.log(`Serviced ${req.method} ${req.originalUrl} with status code ${res.statusCode}`)
        return oldEnd.call(this, ...args) 
    }
    next()
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

hbs.registerHelper('equals', (theOne, theOther) => theOne === theOther)
hbs.registerHelper('and', (theOne, theOther) => theOne && theOther)

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.jpg')))

app.get('/home', (req, resp) => {
    resp.render('homeView')
})

app.use(cinemaRouter)
//app.use(moviesRouter)

