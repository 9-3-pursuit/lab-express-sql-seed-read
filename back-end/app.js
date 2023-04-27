// Dependencies 
const express = require("express");
const cors = require("cors");
const songsController = require('./controllers/songController.js')

// Configuration 
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parses incoming json request

// ROUTES

//  Basic Root Route
app.get("/", (req, res) => {
    res.send("Welcome to Tuner")
});

// Song Routes
app.use("/songs", songsController);

// 404 Page (Error Route)
app.get("*", (req, res) => {
    res.status(404).send("Sorry, nothing found!");
});

module.exports = app;