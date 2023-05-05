const express = require('express')
const songs = express.Router()
const { getAllSongs, getOneSong, addASong, updateSong, deleteSong } = require('../queries/songs')

songs.get('/', async (request, response) => {
    const allSongs = await getAllSongs()
    if (allSongs[0]) {
        response.status(200).json(allSongs)
    } else {
        console.log('this does not work')
        response.status(500).json({error: '500 internal server error'})
    }
})

songs.get('/:id', async (request, response) => {
    const { id } = request.params
    const oneSong = await getOneSong(id)
    if (oneSong) {
        response.status(200).json(oneSong)
    } else {
        response.status(404).json({error: '404 Not Found'})
    }
})



songs.post("/", async (request, response) => {
    try {
      const song = await addASong(request.body);
      response.status(200).json(song);
    } catch (error) {
      response.status(400).json({ error: error });
    }
  });

songs.put("/:id", async (request, response) => {
    const { id } = request.params;
    const updatedSong = await updateSong(id, request.body);
    response.status(200).json(updatedSong);
  });

songs.delete("/:id", async (request, response) => {
    const { id } = request.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.id) {
      response.status(200).json(deletedSong);
    } else {
      response.status(404).json("song not found");
    }
  });

  





module.exports = songs;