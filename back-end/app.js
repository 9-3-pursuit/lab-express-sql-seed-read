// DEPENDENCIES
const cors = require("cors");
const express = require("express")
const playlistController = require("./controllers/playlistController.js")


// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/playlist", playlistController)

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Playlist App 🎧");
});

// EXPORT
module.exports = app;