const express = require("express")
const songs = express.Router();
const { getAllSongs , getSong , createSong, deleteSong, updateSong, getSongsAscOrder, getSongsDescOrder } = require("../queries/songs.js");
const songValidator = require("../validations/checkSongs.js");

//INDEX
songs.get("/" , async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
        res.status(200).json(allSongs)
    }else {
        res.status(500).json({ error: 'server error'})
    };
})

//SHOW
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if (!song.error) {
        res.status(200).json(song)
    } else if (song.error.code === 0) {
        res.status(404).json({error:  "song not found"})
    } else {
        res.status(500).json({ error: "server error"})
    }
}) 

//ASCENDING ORDER
songs.get("/?order=asc", async (req, res) => {
    const songsAscOrder = await getSongsAscOrder();
    res.status(200).json(songsAscOrder)
});

//DESCENDING ORDER
songs.get("/?order=desc", async (req, res) => {
    const songsDescOrder = await getSongsDescOrder();
    res.status(200).json(songsDescOrder)
});

//CREATE
songs.post("/", async (req, res) => {
    const newSong = await createSong(req.body);
    if (!newSong.error) {
        res.status(201).json(newSong)
    } else {
       res.status(500).json({ error: "server error" }) 
    }
})

//DELETE
songs.delete("/:id" , async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if(deletedSong.id) {
        res.status(200).json(deletedSong)
    } else {
        res.status(404).send("Bookmark not found")
    }
})

//UPDATE
songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong)
});



module.exports = songs;