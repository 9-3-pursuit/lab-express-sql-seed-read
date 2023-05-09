const db =  require("../db/dbConfig.js");

const getAllSongsByAlbum = async (id) => {
  try {
    const allSongs = await db.any("SELECT * FROM songs where album_id= $1",[id]);
    return allSongs;
  } catch (err) {
    return err;
  }
};

const getSongByAlbum = async (albumId,songId) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE album_id = $1 and song_id=$2", [albumId,songId]);
    
    return song;
  } catch (error) {
    return {error: "error"}; //object error : key value of error
  }
}

const createSong = async (song,albumId) => {
  try {
    const newSong = await db.one(`INSERT INTO songs (name, artist, time, album, is_favorite, album_id) VALUES ($1, $2, $3, $4,$5 ,$6) RETURNING *`, [song.name, song.artist, song.time, song.album, song.is_favorite,albumId]);
    return newSong; 
  } catch (err) {
    return {error: "error"};
   
  }  
  }
 
  const updateSong = async (albumId,songId, song) => {  
    try {
      const updatedSong = await db.one(`UPDATE songs SET name = $1, artist = $2, time = $3, album = $4, is_favorite = $5 WHERE album_id = $6 and song_id= $7 RETURNING *`, [song.name, song.artist, song.time, song.album, song.is_favorite, albumId, songId]);
      return updatedSong;
    } catch (err) {
      return {error: "error"};
    }
  }

  
 const deleteSong = async (id) => {
    try {
      const deletedSong = await db.one(`DELETE FROM songs WHERE song_id = $1 RETURNING *`, [id]);
      return deletedSong;
    } catch (err) {
      return {error}; 
    }
  }


module.exports = {
  getAllSongsByAlbum, 
  getSongByAlbum,
  createSong,
  updateSong,
  deleteSong,
  };