const db =  require("../db/dbConfig.js");

const getAllAlbums = async () => {
  try {
    const allAlbums = await db.any("SELECT * FROM albums");
    return allAlbums;
  } catch (err) {
    return err;
  }
};

const getAlbum = async (id) => {
  try {
    const album = await db.one("SELECT * FROM albums WHERE album_id = $1", [id]);
    
    return album;
  } catch (error) {
    return {error}; //object error : key value of error
  }
}

const createAlbum = async (album) => {
  try {
    const newAlbum = await db.one(`INSERT INTO albums (name, artist, year,genre, producer) VALUES ($1, $2, $3,$4,$5) RETURNING *`, [album.name, album.artist, album.year, album.genre,album.producer]);
    return newAlbum; 
  } catch (err) {
    return {error: "error"};
   
  }  
  }

  const updateAlbum= async (albumId, album) => {  
    try {
      const updatedAlbum = await db.one(`UPDATE albums SET name = $1, artist = $2, year = $3, genre = $4, producer = $5 WHERE album_id = $6 RETURNING *`, [album.name, album.artist, album.year, album.genre, album.producer, albumId]);
      return updatedAlbum;
    } catch (err) {
      return {error: error};
    }
  }

  const deleteAlbum = async (id) => {
    try {
      const deletedAlbum = await db.one(`DELETE FROM albums WHERE album_id = $1 RETURNING *`, [id]);
      return deletedAlbum;
    } catch (err) {
      return {error}; 
    }
  }


module.exports = {
    getAllAlbums, 
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    };





