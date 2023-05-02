const db = require("../db/dbConfig.js");

const getAllSongs = async (order = undefined, is_favorite = undefined) => {
  let baseQuery = "SELECT * FROM songs";
  if (is_favorite) {
    if (is_favorite === "true") {
      baseQuery += " WHERE is_favorite=true";
    }
    if (is_favorite === "false") {
      baseQuery += " WHERE is_favorite=false";
    }
  }
  if (order) {
    if (order.toLowerCase() === "desc") {
      baseQuery += " ORDER BY name DESC";
    }
    if (order.toLowerCase() === "asc") {
      baseQuery += " ORDER BY name ASC";
    }
  }

  try {
    const result = await db.any(baseQuery);
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
