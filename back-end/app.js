// Dependencies 
const express = require("express");
const cors = require("cors");

//configuration 
const app = express();
const songsController = require("./controllers/songController.js");

//middleware
app.use(cors());
app.use(express.json());

//routes
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