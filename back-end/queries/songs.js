const db = require("../db/dbConfig");

// Part 1: GET (all songs)
const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch (error) {
        return error;
    }
};

// Part 2: GET (one song)
const getOneSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return oneSong;
    }catch(error){
        return {error: error}
    }
}

//  CREATE (new song)
const createSong = async (song) => {
    try {
        const newSong = await db.one(
            `INSERT INTO 
                songs(name, artist, album, time, is_favorite)
            VALUES
                 ($1, $2, $3, $4, $5)
            RETURNING * `,
            [song.name, song.artist, song.album, song.time, song.is_favorite]
        );
        return newSong;
    } catch (error) {
     return { error: error };
    }
 };

 // Part 3: DELETE (song)
const deleteSong = async (id) => {  // songs/id
    try {
        const deletedSong = await db.one
        (`DELETE FROM songs WHERE id=$1 RETURNING *`, id);
        return deletedSong;
    } catch (error) {
        return { error: error };
    }
};


// UPDATE (song)
 const updatedSong = async (id, song) => { // songs/id
    try {
        const updateSong = await db.one(
            `UPDATE FROM songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *`,
             [song.name, song.artist, song.album, song.time, song.is_favorite, id]
        );
        return updateSong;
    } catch(error) {
        return error;
    }
};


module.exports = {
    getAllSongs, 
    getOneSong,
    createSong,
    updatedSong,
    deleteSong,
    };