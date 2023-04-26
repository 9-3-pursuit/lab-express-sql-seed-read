// Dependencies 
const express = require("express");
const cors = require("cors");

// Configuration 
const app = express();
const songsController = require("./controllers/songController.js");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Songs App")
});

// Song ROUTES
app.use("/songs", songsController);

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;