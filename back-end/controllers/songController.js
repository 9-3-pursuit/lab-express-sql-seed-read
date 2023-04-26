const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong } = require("../queries/songs");

// index
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
        res.status(200).json(allSongs);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
});

// show
// GET songs/:id
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if (!song.error) {
        res.status(200).json(song);
    } else if (song.error.code === 0) {
        res.status(404).json({ error: "Song Not Found" });
    } else {
        res.status(500).json({ error: "Server Error" });
    }
})

module.exports = songs;