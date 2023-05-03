


const express = require('express');
const songs = express.Router();

const {
    getAllSongs,
    getSong,
    createSong,
    updateSong,
    deleteSong,
} =  require('../Queries/songs');


// index
songs.get("/", async (req, res) => {

  const allSongs = await getAllSongs();
  if (!allSongs.error) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  } 
});

//show
//GET /songs/ :id 
songs.get("/:id", async(req, res) => {
  const { id } = req.params;
    const song = await getSong(id);
    if (song.error != "error") {
        res.status(200).json(song);
    } else {
        res.status(404).json({ error: "server error" });
    }
});

  
//create 
//POST /songs
          songs.post("/",  async (req, res) => {
            const newSong = await createSong(req.body);
            if (!newSong.error) {
                res.status(200).json(newSong);
            } else {
                res.status(404).json({ error: "server error" });
            }
            
        }); 


//update
//PUT /songs/:id
 songs.put("/:id", 
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
    if (!deletedSong.error) {
        res.status(200).json(deletedSong);
    } else {
        res.status(404).json({ error: "server error" });
    }
}); 

module.exports = songs;