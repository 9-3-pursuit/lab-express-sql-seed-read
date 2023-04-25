const db = require("../db/dbConfig.js");

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

module.exports = {
  getAllSongs,
  getSong,
  createSong
};
