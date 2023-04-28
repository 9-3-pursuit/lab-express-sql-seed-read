const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./back-end/controllers/songController.js");

//Middleware
app.use(express.json());
app.use(cors());

//routes HOME
app.get("/", (req, res) => {
  res.send("Welcome to Tuner App");
});
//ROUTES
app.use("/songs", router);
//404
app.get("*", (req, res) => {
  res.send({ error: "Page Not Found" });
});

module.exports = app;