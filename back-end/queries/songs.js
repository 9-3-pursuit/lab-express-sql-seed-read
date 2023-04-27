const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try {
      const allSongs = await db.any("SELECT * FROM songs");
      return allSongs;
    } catch (error) {
      return {error: error};
    }
};

const getSong = async (id) => {
  try {
    const oneSong = await db.oneOrNone("SELECT * FROM songs WHERE id=$1", id);
    console.log(oneSong)
    return oneSong;
  } catch (error) {
    return {error: error}
  }
}

const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO song (name, artist, album, time, is_favorite)", 
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSong;;
  } catch (error) {
    throw (error);
  }
}
  
module.exports = { 
  getAllSongs,
  getSong,
  createSong
 };