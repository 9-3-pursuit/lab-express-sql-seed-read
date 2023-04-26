const express = require("express");
const songs = express.Router();
const { getAllSongs } = require("../queries/queries.js");

// index page
songs.get("/", async (req, res) => {
    //http://localhost:3003/songs
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
});


module.exports = songs;