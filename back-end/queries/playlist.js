const db = require("../db/dbConfig.js");

const getAllPlaylist = async () => {
  try {
    const allPlaylist = await db.any("SELECT * FROM playlist ");
    return allPlaylist;
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
    const newPlaylist = await db.one(
      "INSERT INTO playlist(name, description, is_favorite) VALUES ($1, $2, $3) RETURNING *",
      [playlist.name, playlist_description, playlist.is_favorite]
    );
    return newPlaylist;
  } catch (error) {
    return { error: error };
  }
};

const deletePlaylist = async (id) => {
  //playlist/id
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlist WHERE id=$1 RETURNING *",
      id
    );
    return deletedPlaylist;
  } catch (e) {
    return e;
  }
};

const updatePlaylist = async (id, playlist) => {
  // playlist/id
  try {
    const updatedPlaylist = await db.one(
      `UPDATE playlist SET name=$1, description=$2,is_favorite=$3 WHERE id=$4 RETURNING *`,
      [playlist.name, playlist.description, playlist.is_favorite, id]
    );
    return updatedPlaylist;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllPlaylist,
  getOnePlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist
};
