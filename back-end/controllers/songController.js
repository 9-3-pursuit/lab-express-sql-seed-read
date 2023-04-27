const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, updateSong, deleteSong } = require("../queries/songs");

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

// create
// POST /songs
songs.post("/", async (req, res) => {
    const { name, artist, album, time, is_favorite } = req.body;

    const newSong = await createSong({ name, artist, album, time, is_favorite });
    if (!newSong.error) {
        res.status(201).json(newSong);
    } else {
        res.status(500).json({ error: "Server Error" });
    }
})

// update
// PUT
songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const song = req.body;
    const updatedSong = await updateSong(id, song);
    res.status(201).json(updatedSong);
})

// delete
// DELETE songs/:id
songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.id) {
        res.status(201).json(deletedSong);
    } else {
        res.status(404).json({ error: "Song Not Found" });
    }
});

module.exports = songs;