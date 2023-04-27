const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, uodateSong } = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if (!allSongs.error) {
        res.status(200).json(allSongs);
    } else {
        console.log(allSongs)
        res.status(500).json({error: "server error" });
    }
});

// SHOW
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if (!song.error) {
        res.status(200).json(song);
    } else if (song.error.code === 0) {
        res.status(404).json({ error: "song not found" });
    } else {
        res.status(500).json({ error: "server error" });
    }

});

// CREATE
songs.post("/", async (req, res) => {
    const { name, artist, album, time, is_favorite } = req.body;
    const newSong = await createSong({name, artist, album, time, is_favorite});
    if(!newSong.error) {
        res.status(200).json(newSong);
    } else {
        res.status(500).json({ error: "server error" })
    }

});

// DELETE
songs.delete("/", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.id) {
        res.status(201).json(deletedSong);
    } else {
        res.status(404).json("Song not found");
    }
});

// UPDATE
songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
});

module.exports = songs;