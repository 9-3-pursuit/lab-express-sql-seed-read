const db = require('../db/dbconfig')

const getAllSongs = async () => {
    try {
        const allSongs = await db.any('SELECT * FROM SONGS')
        return allSongs
    } catch (error) {
        return error
    }
}

const getOneSong = async (songId) => {
    try {
      const oneSong = await db.oneOrNone('SELECT * FROM songs WHERE id = $1', songId);
      return oneSong;
    } catch (error) {
      return { error: error }
    }
}
  

const addASong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSong;
  } catch (error) {
    throw error;
  }
};

const updateSong = async (id, song) => {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4,is_favorite=$5 where id=$6 RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    throw error;
  }
};
  
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

  
  
module.exports = {
    getAllSongs,
    getOneSong,
    addASong,
    updateSong,
    deleteSong
} 