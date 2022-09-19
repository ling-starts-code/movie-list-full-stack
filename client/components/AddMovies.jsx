import React, { useState } from 'react'
import { useDispatch,} from 'react-redux'
import { sendMovies } from '../actions'


// eslint-disable-next-line no-unused-vars
function AddMovies(props) {
 const [movies, setMovies]=useState('')
 const dispatch = useDispatch()

 const handleChange=(e)=>{
  setMovies(e.target.value)
 }
 const handleSubmit=(e)=>{
  e.preventDefault()
   console.log('handleSubmit')
  dispatch(sendMovies(e.target.value))
  setMovies('')

 }

  return (
    <>
      <input
        className="new-todo"
        placeholder="movies to watch after bootcamp"
        value={movies}
        name='name'
        onChange={handleChange}
        onKeyPress={(e)=>{
          e.key==='Enter'&& handleSubmit(e)
        }}
        // autoFocus={true}
      />
    </>
  )
}

export default AddMovies
