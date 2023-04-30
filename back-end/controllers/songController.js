const express = require("express");
const songsRouter = express.Router();
const songValidator = require("../validation/songValidator");
const {
  getAllSongs,
  getOneSong,
  createOneSong,
  deleteOneSong,
  updateOneSong,
} = require("../queries/songs");

songsRouter
  .route("/")
  .get(async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(400).json({ Error: "No song could found" });
    }
  })
  .post(songValidator, async (req, res) => {
    const newSong = await createOneSong(req.body);
    if (newSong) {
      res.status(200).json(newSong);
    }
  });

songsRouter
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    const singleSong = await getOneSong(id);
    if (singleSong) {
      res.status(200).json(singleSong);
    } else {
      res.status(404).json({ Error: "No song could be found" });
    }
  })
  .put(songValidator, async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateOneSong(id, req.body);
    if (updatedSong) {
      res.status(200).json(updatedSong);
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteOneSong(id);
    console.log(deletedSong);
    if (!!deletedSong) {
      res.status(200).json(deletedSong);
    } else {
      res.status(404).json({ Error: "No song could be deleted" });
    }
  });

module.exports = songsRouter;
