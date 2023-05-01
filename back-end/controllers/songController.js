const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/songs.js")

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
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

songs.post("/", async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json({ error: error})
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  res.status(200).json(updatedSong);
})

module.exports = songs;

// const {name, artist, album, time, is_favorite} = req.body;
// const newSong = await createSong({name, artist, album, time, is_favorite});
// if (!newSong) {
//   res.status(200).json(newSong);
// } else {
//   res.status(400).json({ error: "server error"})
// }