const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, deletedSong } = require("../queries/songs.js");
const { validateURL } = require("../validations/validations.js")

// Index
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
        res.status(200).json(allSongs);
    } else {
        console.log(allSongs)
        res.status(500).json({ error: "server error" });
    }
});

// Show - this shows one song
// GET /songs/:id
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id)
    if (!song.error) {
        res.status(200).json(song)
    } else if (song.error.code === 0) {
        res.status(404).json({ error: "song not found" })
    } else {
        res.status(500).json({ error: "server error " })
    }
});

// create
songs.post("/", validateURL, (req, res, next) => {
    const { name, artist, is_favorite } = req.body;
    if (!name || !url || !is_favorite || !category) {
        return res
            .status(404)
            .json({ error: "Body requires, name, artist, is_favorite " })

    }
    next();
},
    async (req, res) => {
        const newSong = await createSong({
            name,
            artist,
            is_favorite,
        });
        if (!newSong.error) {
            res.status(201).json(newSong);
        } else {
            res.status(500).json({ error: 'server error' });
        }
    }
);

//updateSong

songs.put("/:id", validateURL, async (req, res) => {
    const { id } = req.params;
    const song = req.body;
    const updatedSong = await updateBookmark(id, song)
    res.status(200).json(updatedSong);

});

// DELETE
songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteBookmark(id);
    if (deletedSong.id) {
        res.status(200).json(deletedSong);
    } else {
        res.status(404).json("Song not found");
    }
});

module.exports = songs;