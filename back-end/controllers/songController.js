const express = require("express");
const songs = express.Router();
const { getAllSongs, getOneSong, createSong} = require("../queries/queries.js");


// index page - all songs
songs.get("/", async (req, res) => {
    //http://localhost:3003/songs
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
});

// SHOW one song 
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});


module.exports = songs;