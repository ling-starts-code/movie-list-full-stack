const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.post('/',(req,res)=>{
  const movie = req.body.movie// 
  db.addMovies(movie)
    .then((ids)=>{
      res.json({name:movie,id:ids[0]})//!!!!
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})


router.get('/', (req, res)=> {
  db.getAllMoviesData()
  .then((result)=>{
    res.json(result)
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).json({message:'Something went wrong'})
  })

  // res.sendStatus(200)
  // console.log('home route is working')
})

router.delete('/:id', (req, res)=> {
  db.deleteMovieById(req.params.id)
  .then(() => res.sendStatus(200))
  .catch((err)=>{console.log(err)
    res.status(500).send({message:'Something went wrong'})
  })
})

router.patch('/:id', (req,res)=>{
  const updatedMovie = req.body
  const {id} = req.params
  console.log('updatedMovie', updatedMovie)
  db.updateMovieById(id,updatedMovie)
  .then(()=> {res.json(updatedMovie)})
  .catch((err)=>{
    console.log(err)
    res.status(500).json({message:'Something went wrong'})
  })
})
module.exports = router
