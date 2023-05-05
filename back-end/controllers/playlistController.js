// Dependecies
const express = require("express");
const songs = express.Router({ mergeParams: true });

const {
  getAllArtist,
  getArtist,
  createArtist,
  deleteArtist,
  updateArtist,
} = require("../queries/artist.js");

// const {
//   checkFaveBoolean,
//   checkSongNameThere,
//   checkArtistNameThere,
// } = require("../validations/validations.js");

// Part 1 --v

// GET ALL SONGS
artists.get("/", async (req, res) => {
  const allArtists = await getAllArtist();
  if (allArtists[0]) {
    res.status(200).json(allArtists);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// Part 2 --v

// SHOW one song
artists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const artist = await getArtist(id);
  if (artist) {
    res.status(200).json(artist);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE POST song
artist.post("/", async (req, res) => {
  try {
    const artist = await createArtist(req.body);
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// part 3 --v

// UPDATE PUT song
// ! works on Postman but according to npm test it does not
artists.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedArtist = await updateArtist(id, req.body);
    res.status(200).json(updatedArtist);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

// DELETE song
artists.delete(":/id", async (req, res) => {
  const { id } = req.params;
  const goneArtist = await deleteArtist(id);
  if (goneArtist.id) {
    res.status(201).json(goneArtist);
  } else {
    res.status(404).json("Artist not found");
  }
});

module.exports = artist;
