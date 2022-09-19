const connection = require('./connection')

function getAllMoviesData(db=connection){
  return db('movies').select()
}

function addMovies(movie, db = connection){
  return db('movies').insert({name:movie})
}

function deleteMovieById(movieId, db = connection) {
  return db('movies').where('id',movieId).del()
}

function updateMovieById(movieId,updatedMovie,db = connection) {
  return db.addMovies('movies').where('id',movieId).update('name',updatedMovie)
}

module.exports = {getAllMoviesData,addMovies,deleteMovieById,updateMovieById}