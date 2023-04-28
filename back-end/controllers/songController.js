const express = require("express");
const songs = express.Router();
const {getAllSongs, getSong, createSong, updateSong, deleteSong} = require("../queries/songs.js");

songs.get("/", async (req, res) =>{
    const allSongs = await getAllSongs();
    if(!allSongs.error){
        res.status(200).json(allSongs);
    }else{
        res.status(500).json({error:"server error"})
    }
})

songs.get("/:id",async(req,res)=>{
    const {id} = req.params;
    const song = await getSong(id);

    if(!song){
        res.status(404).json({error:"server not found"});
    }else if(song){
        res.status(200).json(song);   
    }else{
        res.status(500).json({error: "server error"})
    }
})

// songs.post("/", async (req,res)=>{
//     const {name, artist, album, time, is_favorite} = req.body;
//     const newSong = await createSong({name, artist, album, time, is_favorite});
//     console.log(newSong)
//     if(!newSong){
//         res.status(200).json(newSong);
//     }else{
//         res.status(400).json({error: "server error"})
//     }
// })

songs.post("/", async (req, res) => {
    try {
      const song = await createSong(req.body);
      res.status(200).json(song);
    } catch (error) {
      res.status(400).json({error: error})
    }
  });

songs.put("/:id", async(req, res)=>{
    const {id} = req.params;
    const {name, artist, album, time, is_favorite} = req.body;
    const updatedSong = await updateSong(id,{name, artist, album, time, is_favorite});
    res.status(200).json(updatedSong)
})
// songs.put("/:id", async (req, res) => {
//     const { id } = req.params;
//     const updatedSong = await updateSong(id, req.body);
//     res.status(200).json(updatedSong);
//   });




songs.delete("/:id", async (req,res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if(deletedSong.id){
        res.status(200).json(deletedSong);
    }else{
        res.status(404).json("Song not found")
    }
})

module.exports = songs;