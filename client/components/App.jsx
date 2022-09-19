import React,{useEffect} from 'react'
import Movies from './Movies'
import AddMovies from './AddMovies'
import { getMovies } from '../actions'
import { useDispatch,} from 'react-redux'



function App() {
  const dispatch = useDispatch()
  useEffect(() => {dispatch(getMovies())}, [])

  return (
    <>
      <header className="header">
        <h1>Movie List</h1>
      </header>
      <section className="main"></section>
      <Movies />
      <AddMovies />
      <footer className="footer"></footer>
    </>
  )
}

export default App
