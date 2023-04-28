const db = require("../db/dbConfig.js");

//INDEX
const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch(error){
        return error
    }

};

//GET ONE SONG
const getOneSong = async (id) => {
   
    try {
        
        const song = await db.one( `SELECT * FROM songs WHERE id=${id}`);
        return song;
    } catch(error){
        return error
    }
};

//ADD SONG TO LIST - CREATE

const addNewSong = async (song) => {
    try {
        const newSong = await db.one(
            `INSERT INTO
            songs(name, artist, album, time, is_favorite)
            VALUES
            ($1, $2, $3, $4, $5)
            RETURNING *;`,
            [song.name, song.artist, song.album, song.time, song.is_favorite]
        );
        console.log(newSong)
        return newSong
    } catch(error) {
        return error
    }
};

//DELETE SONG FROM LIST
const deleteSong = async (id) => {
    //songs/id
    console.log(id);
    try {
      const deletedSong = await db.one(
        "DELETE FROM songs WHERE id=$1 RETURNING *",
        id
      );
      console.log(deleteSong)
      return deletedSong;
    } catch (e) {
      return e;
    }
  };





module.exports = {
    getAllSongs,
    getOneSong,
    addNewSong,
    deleteSong,
}