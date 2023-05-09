const express = require("express");
const cors = require("cors");
// const songController = require("./controllers/songController");
const albumController = require("./controllers/albumController");


//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json()); //parses incoming json request

// routes
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.use("/albums", albumController);

// app.use("/songs", songController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;