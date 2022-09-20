import{saveMovies,getAllMovies,deleteMovieData, updateMoviesData} from'../apis/apiClient'
export const ADD_MOVIES ='ADD_MOVIES'
export const GET_ALL_MOVIES ='GET_ALL_MOVIES'
export const DELETE_MOVIES="DELETE_MOVIES"
export const UPDATE_MOVIES="UPDATE_MOVIES"


export function addMovies(movie){
  return {
    type:ADD_MOVIES,
    payload:movie
  }
}

export function getAll(movies){
  return{
    type:GET_ALL_MOVIES,
    payload:movies
  }
}

export function deleteMovies(id){
  return{
    type:DELETE_MOVIES,
    payload:id
  }
}

export function updateMovies(id, updatedMovie){
  return {
    type:UPDATE_MOVIES,
    payload:{id,updatedMovie}
  }
}


export function sendMovies(movie){
  return (dispatch)=>{
    return saveMovies(movie).then((result)=>{
      dispatch(addMovies(result))
    })
  }
}

export function getMovies(){
  return (dispatch)=>{
    return getAllMovies().then((movies)=>{
      dispatch(getAll(movies))
    })
  }
}

export function deleteMovieById(id){
  return(dispatch)=>{
    return deleteMovieData(id).then(()=>{
      dispatch(deleteMovies(id))
    })
  }
}

export function updateMovieById(id,updatedMovie){
  return(dispatch)=>{
    return  updateMoviesData(updatedMovie).then((result)=>{
      dispatch(updateMovies(id,result))
    })
  }
}

