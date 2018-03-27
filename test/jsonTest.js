'use strict'
const fs = require('fs')
const test = require('tape')

const movieTheaterService = require('../services/movieTheaterService')

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

test('salas test: GET /cinemas/2/auditoriums', function(assert){
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