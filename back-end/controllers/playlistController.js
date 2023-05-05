// Dependecies
const express = require("express");
const playlist = express.Router({ mergeParams: true });

const {
  getAllPlaylist,
  getOnePlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
} = require("../queries/playlist.js");

const {
  checkFaveBoolean,
  checkSongNameThere,
  checkArtistNameThere,
} = require("../validations/validations.js");

// Part 1 --v

// GET ALL Playlist
playlist.get("/", async (req, res) => {
  const { playlistId } = req.params;
  const { error, result } = await getAllPlaylist(playlistId);
  if (error) {
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// Part 2 --v

// SHOW one playlist
playlist.get("/:playlistId", async (req, res) => {
  const { playlistId } = req.params;
  const { error, result } = await getOnePlaylist(playlistId);
  if (error?.code) {
    res.status(404).json({ error: "Playlist not found" });
  } else if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

// CREATE POST playlist
playlist.post(
  "/",
  checkFaveBoolean,
  checkSongNameThere,
  checkArtistNameThere,
  async (req, res) => {
    const { error, result } = await createPlaylist(req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(201).json(result);
    }
  }
);

// part 3 --v

// UPDATE PUT playlist

playlist.put(
  "/:playlistId",
  checkFaveBoolean,
  checkSongNameThere,
  checkArtistNameThere,
  async (req, res) => {
    const { playlistId } = req.params;
    const { error, result } = await updatePlaylist(playlistId, req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  }
);

// DELETE song
playlist.delete(":/playlistId", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await deletePlaylist(playlistId);
  if (error) {
    res.status(404).json("Playlist not found");
  } else {
    res.status(201).json(result);
  }
});

module.exports = playlist;
