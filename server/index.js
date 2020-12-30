const express = require('express')
const app = express()
const port = 3201
const ctrl = require('./controller')
const data = require('../data.json')

//endpoints below
app.get('/api/movies', ctrl.getMovies)
app.get('/api/movie/:id', ctrl.getSingleMovie)


//endpoints above

app.listen(port, ()=> console.log(`Listening on Port ${port}`))