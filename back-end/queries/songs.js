const db = require("../db/dbConfig")

// all
const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch (error) {
        return error;
    }
};

// one
const getSong = async (id) => {
    try {
        const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return song;
    } catch (error) {
        return { error: error };
    }
}


module.exports = { getAllSongs, getSong };