const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
} = require("../queries/queries.js");

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

// CREATE
songs.post("/", async (req, res) => {
  try {
    const { name, artist, album, time, is_favorite } = req.body;
    const newSong = await createSong(name, artist, album, time, is_favorite);
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("song not found");
  }
});

module.exports = songs;
