import request from 'superagent'
const rootUrl ='/api/v1'

export function saveMovies(movie){
  return request
  .post(rootUrl+'/movies')
  .send({movie})// {}whole object
  .then((res)=>{
    return res.body
  })
}

export function getAllMovies(){
  return request.get(rootUrl+'/movies').then((res)=>{
    return res.body
  })
}

export function deleteMovieData(id){
  return request.delete(rootUrl+'/movies/'+id)
    .then((res)=>{
    console.log(res.status)
    return res.body
  })
}

export function updateMoviesData(updatedMovie){
  return request.patch(rootUrl+'/movies/'+updatedMovie.id)
    .send(updatedMovie)
    .then((res)=>{return res.body})
}