const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const result = await db.any("SELECT * FROM songs;");
    return result;
  } catch (error) {
    return error;
  }
};

const getOneSong = async (id) => {
  try {
    const result = await db.oneOrNone("SELECT * FROM songs WHERE id=$1;", id);
    return result;
  } catch (error) {
    return error;
  }
};

const createOneSong = async (newSongInfo) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        newSongInfo.name,
        newSongInfo.artist,
        newSongInfo.album,
        newSongInfo.time,
        newSongInfo.is_favorite,
      ]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

const deleteOneSong = async (id) => {
  try {
    const result = await db.oneOrNone(
      "DELETE FROM songs WHERE id=$1 RETURNING *;",
      id
    );
    return result;
  } catch (error) {
    return error;
  }
};
const updateOneSong = async (id, newSongInfo) => {
  try {
    const result = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *;",
      [
        newSongInfo.name,
        newSongInfo.artist,
        newSongInfo.album,
        newSongInfo.time,
        newSongInfo.is_favorite,
        id,
      ]
    );
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getOneSong,
  createOneSong,
  deleteOneSong,
  updateOneSong,
};
