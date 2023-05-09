// DEPENDENCIES
const express = require('express');
const cors = require('cors');
 //const songsController = require('./controllers/songController')
const albumController = require('./controllers/albumController')

//configuration
const app  = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/',(req,res)=>{
  res.send('Welcome to Tuner')
})

// app.use('/songs', songsController)

//local host:3000/songs
app.use('/albums', albumController)
//404 page 
app.get  ('*',(req,res)=>{
  // console.log('404!')
  res.status(404).send('Page not found')
})


module.exports = app
