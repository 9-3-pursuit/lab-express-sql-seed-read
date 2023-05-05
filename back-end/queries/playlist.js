const db = require("../db/dbConfig.js");

const getAllPlaylist = async (playlistId) => {
  try {
    const result = await db.any("SELECT * FROM playlist WHERE songs_id=$1", [
      playlistId,
    ]);
    return { result };
  } catch (error) {
    return { error: error };
  }
};

const getOnePlaylist = async (id) => {
  console.log(id);
  try {
    const soloPlaylist = await db.one("SELECT * FROM playlist WHERE id=$1", id);
    return soloPlaylist;
  } catch (error) {
    return { error: error };
  }
};

const createPlaylist = async (playlist) => {
  try {
    const result = await db.one(
      `INSERT INTO
        playlist(song_id, name, description, is_favorite)
       VALUES
        ($1, $2, $3, $4)
       RETURNING *;`,
      [
        playlist.song_id,
        playlist.name,
        playlist.descriptiion,
        playlist.is_favorite,
      ]
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

const deletePlaylist = async (id) => {
  //playlist/id
  try {
    const result = await db.one(
      "DELETE FROM playlist WHERE id=$1 RETURNING *",
      id
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

const updatePlaylist = async (id, playlist) => {
  // playlist/id
  try {
    const result = await db.one(
      `UPDATE playlist SET name=$1, description=$2,is_favorite=$3 WHERE id=$4 RETURNING *`,
      [playlist.name, playlist.description, playlist.is_favorite, id]
    );
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPlaylist,
  getOnePlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
};
