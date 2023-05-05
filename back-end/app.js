const express = require('express');
const cors = require('cors');
const songController = require('./controllers/songController');



const app = express()

app.use(cors())
app.use(express.json()) 

app.get('/', (request, response) => {
    response.send('Welcome to Tuner')
})

app.use('/songs', songController)

app.get('*', (request, response) => {
    response.status(404).send('404 Page Not Found')
})

module.exports = app;