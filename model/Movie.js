'use strict'

module.exports = Movie

function Movie(movieDetails) {
    this.tagline = movieDetails.tagline
    this.id = movieDetails.id
    this.originalTitle = movieDetails.original_title
    this.overview = movieDetails.overview
    this.posterPath = movieDetails.poster_path
}

Movie.prototype.toString = function () {
    return `{
            tagline: ${this.tagline}, 
            id: ${this.id},
            originalTitle: ${this.originalTitle},
            overview: ${this.overview}`+ 
            '}' 
}