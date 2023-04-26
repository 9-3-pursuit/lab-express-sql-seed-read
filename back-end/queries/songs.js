const db = require("../db/dbConfig.js");

 const getAllSongs = async () => {
     try {
         const allSongs = await db.any("SELECT * FROM songs");
         return allSongs;
     }catch (error) {
         return{ error: error }
     }
 };

 module.exports = { 
    getAllSongs, 
};