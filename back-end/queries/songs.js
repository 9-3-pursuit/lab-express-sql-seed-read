

const db =  require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    return err;
  }
};

const getSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id = $1", [id]);
    
    return song;
  } catch (error) {
    return {error: "error"}; //object error : key value of error
  }
}

const createSong = async (song) => {
  try {
    const newSong = await db.one(`INSERT INTO songs (name, artist, time, album, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [song.name, song.artist, song.time, song.album, song.is_favorite]);
    return newSong; 
  } catch (err) {
    return {error: "error"};
   
  }  
  }
 
  const updateSong = async (id, song) => {  
    try {
      const updatedSong = await db.one(`UPDATE songs SET name = $1, artist = $2, time = $3, album = $4, is_favorite = $5 WHERE id = $6 RETURNING *`, [song.name, song.artist, song.time, song.album, song.is_favorite, id]);
      return updatedSong;
    } catch (err) {
      return {error: "error"};
    }
  }
 const deleteSong = async (id) => {
    try {
      const deletedSong = await db.one(`DELETE FROM songs WHERE id = $1 RETURNING *`, [id]);
      return deletedSong;
    } catch (err) {
      return {error: "error"}; 
    }
  }


module.exports = {
  getAllSongs, 
  getSong,
  createSong,
  updateSong,
  deleteSong,
  };