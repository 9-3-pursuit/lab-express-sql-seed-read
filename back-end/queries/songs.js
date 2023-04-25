const db = require("../db/dbConfig.js")

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    }catch (e) {
        return error;
    }
};

const getSong = async (id) => {
    try {
        const song = await db.any("SELECT * FROM songs WHERE id =$1", id);
        return song;
    }catch(error) {
        return { error: error };
    }
}

const createSong = async (song) => {
    try {
        const newSong = await db.one(
            `INSERT INTO
                song(name, artist, album, time, is_favorite)
            VALUE
                ($1, $2, $3, $4)
            RETURN *`,
            [song.name, song.artist, song.album, song.time, song.is_favorite]
        );
        return newSong;

    } catch (error) {
       return { error: error } 
    }
}
module.exports = {
    getAllSongs,
    getSong,
    createSong,
} 