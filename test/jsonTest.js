'use strict'
const fs = require('fs')
const test = require('tape')

const movieTheaterService = require('../services/movieTheaterService')
const auditoriumService = require('../services/auditoriumService.js')

test('cinemas test: GET /cinemas', function(assert){
    movieTheaterService.getmovieTheaters((err, movieTheaters) => {
        if (err)
            assert.error(err, '')
        else {
            assert.notEqual(movieTheaters, null)
            assert.equal(movieTheaters.length, 3)    //Length

            let cinema = movieTheaters[1]
            assert.equal(cinema.id, 2)
            assert.equal(cinema.name, 'Cinema City Alvalade')
            assert.equal(cinema.city, 'Lisboa')
        }
        assert.end()
    })
})

test('cinemas test: GET /cinemas/1', function(assert){
    movieTheaterService.getCinemaInfo(1, (err, movieTheaters) => {
        if (err)
            assert.error(err, '')
        else {
            assert.notEqual(movieTheaters, null)
            assert.equal(movieTheaters.id, 1)
            assert.equal(movieTheaters.city,'Setúbal')
            assert.equal(movieTheaters.name, 'Cinema City Alegro Setúbal')
            assert.equal(movieTheaters.movies.length, 3)
            assert.equal(movieTheaters.auditorium.length,3)
        }
        assert.end()
    })
})

test('auditoriums test: GET /cinemas/2/auditoriums', function(assert){
    movieTheaterService.getAuditoriums(2, (err, auditoriums) => {
        if (err)
            assert.error(err, '')
        else {
            assert.notEqual(auditoriums, null)
            assert.equal(auditoriums.length, 2)    //Length

            let auditorium = auditoriums[1]
            assert.equal(auditorium.name, 'sala2')
            assert.equal(auditorium.rows, 20)
            assert.equal(auditorium.seats, 10)
        }
        assert.end()
    })
})

test('auditorium info test: GET /cinemas/2/auditoriums/1', function(assert){
    auditoriumService.getAuditoriumInfo(2, 1, (err, auditorium) => {
        if (err)
            assert.error(err, '')
        else {
            assert.notEqual(auditorium, null)
            
            assert.equal(auditorium.name, 'sala1')
            assert.equal(auditorium.rows, 20)
            assert.equal(auditorium.seats, 10)
            assert.equal(auditorium.lotation,200 )
            assert.equal(auditorium.movie, 346364)
        }
        assert.end()
    })
})