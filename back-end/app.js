// Dependencies 
const express = require("express");
const cors = require("cors");
const songsController = require('./controllers/songController.js')

// Configuration 
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parses incoming json request

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Tuner")
});

// Song ROUTES
app.use("/songs", songsController);

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Sorry, nothing found!");
});

module.exports = app;