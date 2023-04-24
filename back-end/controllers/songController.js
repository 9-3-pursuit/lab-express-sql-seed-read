// Dependecies
const express = require("express")
const songs = express.Router()
const {getAllSongs}  = require("../queries/songs")

// INDEX
songs.get("/", async (req, res) => {
    // http://localhost:3003/bookmarks
    const allSongs = await getAllBookmarks();
    if (allBookmarks[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });
  
  module.exports = songs;