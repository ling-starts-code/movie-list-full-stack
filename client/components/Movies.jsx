import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {deleteMovieById} from'../actions'
import UpdateMovies from './UpdateMovies'

// eslint-disable-next-line no-unused-vars
function Movies() {

  const movies =useSelector((state)=>state.movies)
  const dispatch = useDispatch()

  const handleDelete=(e,id)=>{
    e.preventDefault()
    dispatch(deleteMovieById(id))
    console.log('delete button clicked',id)
  }

  return (
    <ul className='todo-list'>
    {movies.map((item)=>{ 
      return (
       <li  key={item.id}>
         <div className='view'>
          {/* <input className='toggle'/> */}
          <UpdateMovies item={item}/>
          {/* <label> {item.name} </label> */}
          <button className='destroy' onClick={(e)=>{handleDelete(e,item.id)}}></button>
        </div>
        {/* <input className='edit'/> */}
      </li>  )    
    })}
    </ul>
  )
}

export default Movies
