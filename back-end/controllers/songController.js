const express = require('express');
const songs = express.Router()
const {getAllSongs,
      getSong,
      createSong,
      updateSong,
      deleteSong
    } = require('../queries/songs.js')
const {validateURL} = require('../validations/validateURL.js')

//index
songs.get('/',async(req,res)=>{
    const allSongs = await getAllSongs()
    if(!allSongs.error){
        res.status(200).json(allSongs)
    }
    // console.log(allSongs)
   else{
    res.status(500).json({error:'server error'})
   } 
})

//show
songs.get('/:id',async(req,res)=>{
    const {id} = req.params
    const song = await getSong(id)
    console.log(songs)
    if(!song.error){
        res.status(200).json(song)
    } else if (song.error === 0) {
        res.status(404).json({ error: "song not found" });
      } else {
        res.status(500).json({ error: "server error" });
      }
    });

//create
songs.post('/',async(req,res)=>{
    const song = req.body
    const newSong = await createSong(song)
    if(!newSong.error){
        res.status(200).json(newSong)
    }
    res.status(404).json({error:'Song not created'})
}
)


//update
songs.put('/:id',async(req,res)=>{
    const {id} = req.params
    const song = req.body
    const updatedSong = await updateSong(id,song)
    if(!updatedSong.error){
        res.status(200).json(updatedSong)
    }
    res.status(404).json({error:'Song not updated'})
}
)

//delete
songs.delete('/:id',async(req,res)=>{
    const {id} = req.params
    const deletedSong = await deleteSong(id)
    if(!deletedSong.error){
        res.status(201).json(deletedSong)
    }
    res.status(404).json({error:'Song not found'})
}
)

module.exports = songs