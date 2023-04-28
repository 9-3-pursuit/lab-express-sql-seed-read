const express = require("express");

const songs = express.Router();

const { 
    getAllSongs, 
    getOneSong, 
    addNewSong, 
    updateSong,
    deleteSong
     
} = require("../queries/songs.js");

const validateName = require("../validations/validations.js");



//INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (!allSongs.error) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//GET ONE SONG
songs.get("/:id", async (req, res) => {
  const { id } = req.params;

  const song = await getOneSong(id);

  if (!song.error) {
    res.status(200).json(song);
  } else if (song.error.code === 0) {
    res.status(404).json({ error: "song not found" });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//ADD SONG TO LIST - CREATE
songs.post(
    "/",
    validateName,
    (req, res, next) => {
      const { name, artist, album, time, is_favorite } = req.body;
      if (!name || !artist || !album || !time || !is_favorite) {
        return res
          .status(422)
          .json({
            error: "body requires name, artist, album, time, is_favorite",
          });
      }
      return next();
    },
    async (req, res) => {
      try {
        const { name, artist, album, time, is_favorite } = req.body;
        const newSong = await addNewSong({
          name,
          artist,
          album,
          time,
          is_favorite,
        });console.log(res)
        return res.status(201).json(newSong);
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "server error" });
      }
    }
  );

  //UPDATE SONG INFORMATION
  songs.put("/:id", validateName, async (req, res) => {
    const { id } = req.params;
    const song = req.body;
  
    console.log("PUT request received for song id:", id);
    console.log("Updated song data:", song);
  
    try {
      const updatedSong = await updateSong(id, song);
  
      console.log("Updated song result:", updatedSong);
  
      if (updatedSong.id) {
        res.status(200).json(updatedSong);
      } else {
        res.status(404).json("Song not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });
  

  //DELETE SONG FROM LIST
  songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    // console.log(deletedSong);
    if (deletedSong.id) {
        res.status(201).json(deletedSong)
    } else {
        res.status(404).json("Song not found");
    }
  });
  

module.exports = songs;
