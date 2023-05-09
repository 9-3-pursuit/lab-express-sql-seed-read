import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Song from "./Song";
import SongNewForm from "./SongNewForm";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  let { albumId } = useParams();

  useEffect(() => {
    axios.get(`${API}/albums/${albumId}/songs`).then((response) => {
     
      setSongs(response.data);
    });
  }, [albumId]);

  const handleSubmit = (newSong) => {
    axios
      .post(`${API}/albums/${albumId}/songs`, newSong)
      .then(
        (response) => {
          setSongs([response.data, ...songs]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (songId) => {
    axios
      .delete(`${API}/albums/${albumId}/songs/${songId}`)
      .then(
        (response) => {
          const copySongArray = [...songs];
          const indexDeletedSong = copySongArray.findIndex((song) => {
            return song.song_id === songId;
          });
          copySongArray.splice(indexDeletedSong, 1);
          setSongs(copySongArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedSong) => {
  
    axios
      .put(`${API}/albums/${albumId}/songs/${updatedSong.song_id}`, updatedSong)
      .then((response) => {
       
        const copySongArray = [...songs];
        const indexUpdatedSong= copySongArray.findIndex((song) => {
          return song.song_id === updatedSong.song_id;
        });
        copySongArray[indexUpdatedSong] = response.data;
        setSongs(copySongArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  return (
    <section className="Songs">
      <h2>Songs</h2>
      <SongNewForm handleSubmit={handleSubmit}>
        <h3>Add a New Song</h3>
      </SongNewForm>
      {songs.map((song) => (
        <Song
          key={song.song_id}
          song={song}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </section>
  );
}



export default Songs;