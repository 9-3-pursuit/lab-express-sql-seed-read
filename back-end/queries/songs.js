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
        return { error: error};
    }
}

const createSong = async (song) => {
    try {
        const newSong = await db.one(
        "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [song.name, song.artist, song.album, song.time, song.is_favorite]
    );
        return newSong;
    }  catch (error) {
        return { error: error }; 
    }
}

const deleteSong = async (id) => {
    try { 
        const deleteSong = await db.one("DELETE FROM songs WHERE id = $1 RETURNING *", id);
        return deleteSong;
    }  catch(error) {
        return { error: error };
    }
}

const updateSong = async (id, song) => {
    try {
        const updatedSong = await db.one("UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *", 
        [song.name, song.artist, song.album, song.time, song.is_favorite, id]);
        return updatedSong;
    }   catch(error) {
        return { error: error };
    }
}

const getSongsAscOrder = async () => {
    try {
        const songsAscOrder = await db.any("SELECT * FROM songs ORDER BY name ASC");
        return songsAscOrder;
    }catch (e) {
        return error;
    }
};

const getSongsDescOrder = async () => {
    try {
        const songsDescOrder = await db.any("SELECT * FROM songs ORDER BY name DESC");
        return songsDescOrder;
    }catch (e) {
        return error;
    }
};


module.exports = {
    getAllSongs,
    getSong,
    createSong,
    deleteSong,
    updateSong,
    getSongsAscOrder,
    getSongsDescOrder,
} 