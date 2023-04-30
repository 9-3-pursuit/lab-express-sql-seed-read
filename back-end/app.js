const express = require("express");
const cors = require("cors");
const songsRouter = require("./controllers/songController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Tuner");
});

app.use("/songs", songsRouter);

app.get("*", (req, res) => {
  res.status(400).send("Resource could not be found");
});

module.exports = app;
