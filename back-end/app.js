const express = require("express")
const cors = require("cors");
const songControllers = require("./controllers/songController.js");


//CONFIG
const app = express();


// MIDDLEWARE
app.use(cors());
app.use(express.json());//parses incoming json request


// ROUTES
app.get("/", (req, res)=> {
    res.send("Welcome to Tuner app")
});
app.use("songs", songControllers);
app.use("*", (req, res) => {
    res.status(404).send("Page not found")
})

module.exports = app;