

const express = require("express");
const cors = require("cors");

const albumController = require("./Controllers/albumController");
//const songController = require("./Controllers/songController");

//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json()); //parses incoming json request

// routes
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

//localhost://3345/albums
app.use("/albums", albumController);

//app.use("/songs", songController);



app.get("*", (req, res) => {
  res.status(404).send("Page not Found");
});

module.exports = app;