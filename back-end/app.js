// Dependencies
const express = require("express");
const songController = require("./controllers/songController");
// const reviewsControllers = require("./controllers/reviewsController.js");

const cors = require("cors");

// CONFIGURATION
const app = express();

//middleware
app.use(cors());
app.use(express.json()); // json middleware parses incoming requests with JSON payloads

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.use("/songs", songController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Sorry, page not found!");
});

// EXPORT
module.exports = app;