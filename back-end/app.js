// dependencies
const cors = require("cors");
const express = require("express");
const songsController = require("./controllers/songController");

// config
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/songs", songsController);

app.get("/", (req, res) => {
    res.send("Welcome to Tuner")
});

// 404 page
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

// export
module.exports = app;