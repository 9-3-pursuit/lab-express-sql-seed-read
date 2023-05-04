// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const songController = require("./controllers/songController");

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

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found");
})

// EXPORT

module.exports = app;