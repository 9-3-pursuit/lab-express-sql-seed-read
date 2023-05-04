const express = require("express");

const songs = express.Router();

const { getAllSongs, getSong,createSong, updatedSong, deleteSong } = 
require("../queries/songs.js");
// const { getAllSongs } = require("../queries/songs");
// const { getSong } = require("../queries/songs");
// const { createSong } = require("../queries/songs");
// const { updateSong } = require("../queries/songs");
// const { deleteSong } = require("../queries/songs");


songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  console.log(allSongs);
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSong = await getSong(id);
  if (!oneSong.error) {
    res.status(200).json(oneSong);
  } else if (oneSong.error.code === 0) {
    res.status(404).json({ error: "Song does not exist" });
  } else {
    res.status(500).json({ error: "Song not found" });
  }
});

songs.post("/", async (req, res) => {
  const { name, artist, album, time, is_favorite } = req.body;
  const newSong = await createSong({ name, artist, album, time, is_favorite });
  // if (!name || !artist || !album || !time || !is_favorite) {
  //     res.status(422).json({error: "body must contain name, artist, is_favorite"});
  // }
  if (!newSong.error) {
    res.status(201).json(newSong);
  } else {
    res.status(500).json({ error: "Song not created" });
  }
});

songs.put("/", async (req, res) => {
  const { id } = req.params;
  const song = req.body;
  const updatedSong = await updateSong(song, id);
  if (!song.id) {
    res.status(201).json(updatedSong);
  } else {
    res.status(404).json({ error: "Song not found" });
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (!deletedSong.id) {
    res.status(201).json(deletedSong);
  } else {
    res.status(404).json({ error: "Song not found" });
  }
});

module.exports =  songs;
