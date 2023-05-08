 
 
//localhost:3345/albums

const express = require('express');
const albums = express.Router();
const songController = require("./songController");

const {
    getAllAlbums,
     getAlbum,
     createAlbum,
     updateAlbum,
     deleteAlbum,
} =  require('../Queries/albums');

 //localhost:3345/albums/:albumId/songs
albums.use("/:albumId/songs",songController)


// index
albums.get("/", async (req, res) => {

  const allAlbums = await getAllAlbums();
  if (!allAlbums.error) {
    res.status(200).json(allAlbums);
  } else {
    res.status(500).json({ error: "server error" });
  } 
});

//show
//GET /Album/ :id 
albums.get("/:albumId", async(req, res) => {
  const { albumId } = req.params;
 
    const album = await getAlbum(albumId);
    if (album.error != "error") {
        res.status(200).json(album);
    } else {
        res.status(404).json({ error: "server error" });
    }
});

  
//create one album ----> insert into albums
//POST /album
//localhost:3345/albums
          albums.post("/", async (req, res) => {
            const newAlbum = await createAlbum(req.body);
            if (!newAlbum.error) {
                res.status(200).json(newAlbum);
            } else {
                res.status(404).json({ error: "server error" });
            }
            
        }); 


//update

 albums.put("/:albumId",
    async (req, res) => { 
        const { albumId } = req.params;
    const updatedAlbum = await updateAlbum(albumId, req.body);
    if (!updatedAlbum.error) {
        res.status(200).json(updatedAlbum);
    } else {
        res.status(404).json({ error: "server error" });
    }
});



albums.delete("/:albumId", async (req, res) => {
    const { albumId } = req.params;
    const deletedAlbum = await deleteAlbum(albumId);
    if (!deletedAlbum.error) {
        res.status(200).json(deletedAlbum);
    } else {
        res.status(404).json({ error: "server error" });
    }
}); 

module.exports = albums;