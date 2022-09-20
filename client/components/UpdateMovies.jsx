import React,{ useState} from "react"
import {useDispatch} from "react-redux"
import{updateMovieById} from'../actions'

const UpdateMovies=(props)=>{

  const [movie,setMovie]=useState('')
  const [showInput,setShowInput]=useState(false)
  const dispatch = useDispatch()

  const handleChange=(e)=>{
    e.preventDefault()
    setMovie(e.target.value)
  }

  const handleUpdate=(e)=>{
    e.preventDefault()
    dispatch(updateMovieById(props.item.id,{...props.item,name:movie}))
    setMovie('')
    setShowInput(false)
  }

  const handleDoubleClick=(e)=>{
    e.preventDefault()
    setShowInput(!showInput)
    setMovie(props.item.name)
  }

  return(
    <div>
    <form>
      {/* <label onDoubleClick={handleDoubleClick}> {props.item.name} </label> */}
      {showInput?
      <input value={movie} onChange={handleChange} onKeyPress={(e)=>{
          e.key==='Enter'&& handleUpdate(e)
        }}/>:
        <label onDoubleClick={handleDoubleClick}> {props.item.name} </label>}
    </form>
    </div>
  )
}

export default UpdateMovies