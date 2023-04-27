const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require("../queries/songs.js")

songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if (!allSongs.error) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (!song.error) {
    console.log(song);
    res.status(200).json(song);
  } else if (song.error.code === 0) {
    req.status(404).json({ error: "server not found "})
  } else {
    res.status(500).json({ error: "not found" });
  }
});

songs.post("/", async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error})
  }
});

module.exports = songs;