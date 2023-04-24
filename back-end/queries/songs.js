const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    // .any() means it will accept any return from the database, no rows, one row, or many rows of data.
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

const getSong = async () => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
    return oneSong
  } catch (error) {
    return error
  }
}
module.exports = { getAllSongs, getSong };