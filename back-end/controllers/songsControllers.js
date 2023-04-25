// Dependecies
const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require("../queries/songs.js");

// GET ALL SONGS - pt 1
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW one song -pt 2
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (!songs.error) {
    res.status(200).json(song);
  } else if (song.error.code === 0) {
    res.status(404).json({ error: "song not found" });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// CREATE POST song
songs.post("/", async (req, res) => {
  const { name, artist, album, time, is_favorite } = req.body;

  const newSong = await createSong({
    name,
    artist,
    album,
    time,
    is_favorite,
  });
  if (!newSong.error) {
    res.status(201).json(newSong);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = songs;
