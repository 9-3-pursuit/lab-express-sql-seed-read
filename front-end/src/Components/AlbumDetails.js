import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Songs from "./Songs";

const API = process.env.REACT_APP_API_URL
 
function AlbumDetails() {
  const [album, setAlbum] = useState({});
  const { albumId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/albums/${albumId}`)
    .then((response) => {
     
      setAlbum(response.data)
    }).catch((e) => {
      console.warn("catch:", e)
    })
  }, [albumId]);

  const handleDelete = () => {
   
    deleteAlbum();
  };

  const deleteAlbum = () => {
    axios
      .delete(`${API}/albums/${albumId}`)
      .then(() => {
        navigate(`/albums`);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  };

return (
  <article>
    <h1>Abum: {album.name} - By {album.artist}</h1>
    <h2>
      <span>
        Genre:
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {album.genre}
    </h2>
    <h3>Producer: {album.producer}</h3>
    <div className="showNavigation">
      <div>
        <Link to={`/albums`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/albums/${album.album_id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
    <h3>Songs</h3>
  <Songs />
  </article>
 ) 
}

export default AlbumDetails;