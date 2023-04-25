const express = require("express");
const app = express();
const cors = require("cors");
const songsController = require("./controllers/songController.js");

app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//     console.log("This code runs for every request");
//     next();
// });

app.get("/", (req, res) => {
    res.send("welcome to KRecords");
});

app.use("/songs", songsController);

app.get("*", (req, res) => {
    res.status(404).send("Error")
});

module.exports = app;