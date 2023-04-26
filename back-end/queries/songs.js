const db = require("../db/dbConfig.js");

// Part 1 --v
// all songs
const getAllSongs = async () => {
  try {
    // .any() means it will accept any return from the database, no rows, one row, or many rows of data.
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

// Part 2 --v 
// one song
const getSong = async (id) => {
  try {
    const song = await db.oneOrNone("SELECT * FROM songs WHERE id=$1", id);
    return song;
  } catch (error) {
    return { error: error };
  }
};

// new song
const createSong = async (song) => {
  try {
    const newSong = await db.one(
      `INSERT INTO songs(name, artist, album,time, is_favorite)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSong;
  } catch (error) {
    return { error: error };
  }
};

// Part 3 --v
// delete a bookmark
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

// update song
const updateSong = async (id, song) => {
  try {
    const updateSong = await db.one(
      `UPDATE songss SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE  id=$6 RETURNING *`,
      [song.name, song.artist, song.ablum, song.time, song.is_favorite, id]
    );
    return updateSong;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
};
