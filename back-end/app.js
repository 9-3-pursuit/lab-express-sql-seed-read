// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to Your Music Playlist");
});



app.get("*", (req, res) => {
    res.status(404).send("Page Not Found");
})

// EXPORT

module.exports = app;