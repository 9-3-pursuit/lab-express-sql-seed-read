const songs = require("../controllers/songController");
const db = require("../db/dbConfig");


const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch (error) {
        return error;
    }

};

const getSong = async (id) => {
    try {
        const song = await db.oneOrNone("SELECT * FROM songs WHERE id=$1",
            id
        );
        return song;
    } catch (error) {
        return { error: error };
    }
};

const createSong = async (song) => {
    try {
        const newSong = await db.one(`
    INSERT INTO 
    songs(name, artist, is_favorite) 
    VALUE
    ($1,$2, $3, $4) 
    RETURNING *`,
            [song.name, song.artist, song.is_favorite]
        );
        return newSong
    } catch (error) {
        return { error: error };
    }
};

const deletedSong = async (id) => {
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
const updateSong = async (id, song) => {
    try {
        const updatedSong = await db.one(
            "UPDATE songs SET name=$1, artist=$2, is_favorite=$3 WHERE id=$4 RETURNING *",
            [song.name, song.artist, song.is_favorite, id]
        );
        return updatedSong;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllSongs, getSong, createSong, deletedSong, updateSong };