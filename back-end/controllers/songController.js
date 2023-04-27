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
        res.status(500).json({error: "Server Error"});
    }
});

// SHOW
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await get             
});

// CREATE




module.exports = songs;