const express = require("express");
const songs = express.Router();
const validateSong = require("../validations/validateBookmark.js");
const reviewsController = require("./reviewsController.js");
const {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/queries.js");

// GET /songs/2/reviews

songs.use("/:songId/reviews", reviewsController);

// index
songs.get("/", async (req, res) => {
  const { error, result } = await getAllSongs();
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

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
  const { error, result } = await getOneSong(id);
  if (error?.code === 0) {
    res.status(404).json({ error: "Song not found" });
  } else if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

// CREATE
songs.post("/", validateSong, async (req, res) => {
  const { error, result } = await createSong(req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(201).json(result);
  }
});

//update
songs.put("/:id", validateSong, async (req, res) => {
  const { id } = req.params;
  const { error, result } = await updateSong(id, req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

// Delete
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await deleteSong(id);
  if (error) {
    res.status(404).json("Song not found");
  } else {
    res.status(201).json(result);
  }
});

module.exports = songs;
