const db = require("../db/dbConfig.js");

const getAllArtist = async (song_id) => {
  try {
    const allArtist = await db.any(
      "SELECT * FROM songs WHERE song_id=$1",
      song_id
    );
    return allArtist;
  } catch (error) {
    return { error: error };
  }
};

const getArtist = async (id) => {
  console.log(id);
  try {
    const artist = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return artist;
  } catch (error) {
    return { error: error };
  }
};

const createArtist = async (song) => {
  try {
    const newArtist = await db.one(
      "INSERT INTO songs(name, artist, album,time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newArtist;
  } catch (error) {
    return { error: error };
  }
};

const deleteArtist = async (id) => {
  //songs/id
  try {
    const deletedArtist = await db.one(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    );
    return deletedArtist;
  } catch (e) {
    return e;
  }
};

const updateArtist = async (id, song) => {
  // songs/id
  try {
    const updatedArtist = await db.one(
      `UPDATE songs SET name=$1, artist=$2, album=$3, time=$4 is_favorite=$6 WHERE id=$6 RETURNING *`,
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );
    return updatedArtist;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllArtist,
  getArtist,
  createArtist,
  deleteArtist,
  updateArtist,
};
