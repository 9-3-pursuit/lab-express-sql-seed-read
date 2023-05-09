const express = require('express');
const songs = express.Router({ mergeParams: true});
//const {validateNAF} = require('../Validations/validation')

const {
    getAllSongsByAlbum,
    getSongByAlbum,
    createSong,
    updateSong,
    deleteSong,
} =  require('../Queries/songs');


// index
// localhost:3345/albums/:album_id/songs
songs.get("/", async (req, res) => {
  const {albumId} = req.params;
  const allSongs = await getAllSongsByAlbum(albumId);
  if (!allSongs.error) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  } 
});

//show
// localhost:3345/albums/:album_id/songs/:song_id 
songs.get("/:songId", async(req, res) => {
  const { albumId,songId } = req.params;
    const song = await getSongByAlbum(albumId,songId);
    if (song.error != "error") {
        res.status(200).json(song);
    } else {
        res.status(404).json({ error: "server error" });
    }
});

  
//create 
//localhost:3345/albums/:albumId/songs
          songs.post("/", async (req, res) => {
            const { albumId } = req.params;
            const newSong = await createSong(req.body,albumId);
            if (!newSong.error) {
                res.status(200).json(newSong);
            } else {
                res.status(404).json({ error: "server error" });
            }
            
        }); 


//update
//PUT localhost:3345/albums/:albumId/songs/:songId
 songs.put("/:songId",
    async (req, res) => { 
        const { albumId, songId } = req.params;
    const updatedSong = await updateSong(albumId,songId, req.body);
    if (!updatedSong.error) {
        res.status(200).json(updatedSong);
    } else {
        res.status(404).json({ error: "server error" });
    }
});



songs.delete("/:songId", async (req, res) => {
    const { songId } = req.params;
    const deletedSong = await deleteSong(songId);
    if (!deletedSong.error) {
        res.status(200).json(deletedSong);
    } else {
        res.status(404).json({ error: "server error !!!!!!!!!" });
    }
}); 

module.exports = songs;