// const db = require('./dbConfig.js');
// const createTrack = async (track) = {
//    db.one( `INSERT INTO
//     tracks (name, artist, album, time, is_favorite)
//     VALUES
//     ($1, $2, $3, $4, $5)
//     RETURNING *`, [track.name, track.artist, track.album, track.time, track.is_favorite])

// const { required } = require("joi");

// // }
// const Joi = require("joi")

// const trackSchema = Joi.object({
//     name: Joi.string().required(),
//     artist: Joi.string().required(),
//     album: Joi.string(),
//     time: Joi.string(),
//     is_favorite: Joi.boolean()

// })

// const testInput1 = {
//     name: "dance on the floor",
//     artist: "j lo",
//     album: "jlo"
// }

// const trackvalidator = (req, res, next) => {
//     if (false ){
//         next();
//     } else {
//         res.status(400).json({error: "Invalid request"})
//     }
// }

// const result = trackSchema.validate(testInput1)
// console.log(result)