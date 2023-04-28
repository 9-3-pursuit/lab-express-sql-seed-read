// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const songController = require("./controllers/songController.js")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});
app.use("/songs", songController);

//ERROR HANDLING
app.get("*", (req, res) => {
    res.status(404).json({"error" : "Page Not Found"})
});

// EXPORT
module.exports = app;