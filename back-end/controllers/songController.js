const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs.js");
const {validateURL} = require("../validations/validateURL.js")

// index
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (!allSongs.error) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// show
songs.get("/:id", async(req, res) => {
    const { id } = req.params;
      const song = await getSong(id);
      if (song.error != "error") {
          res.status(200).json(song);
      } else {
          res.status(404).json({ error: "server error" });
      }
  });

// create
songs.post("/", validateURL, async (req, res) => {
    const newSong = await createSong(req.body);
    if (!newSong.error) {
        res.status(200).json(newSong);
    } else {
        res.status(404).json({ error: "server error" });
    }
    
}); 

  
// update song
songs.put("/:id", validateURL,
    async (req, res) => { 
        const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    if (!updatedSong.error) {
        res.status(200).json(updatedSong);
    } else {
        res.status(404).json({ error: "server error" });
    }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  console.log(deletedSong);
  if (deletedSong.id) {
    res.status(201).json(deletedSong);
  } else {
    res.status(404).json("Song not found");
  }
});



module.exports = songs;

