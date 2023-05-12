import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Playlist from "./Playlist";
import PlaylistForm from "./PlaylistForm";

// const API = process.env.REACT_APP_API_URL;

function Playlists() {
  const [playlist, setPlaylist] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3333/songs/${id}/playlist`).then((response) => {
      console.log(response.data);
      setPlaylist(response.data);
    });
  }, [id]);

  const handleAdd = (newPlaylist) => {
    axios
      .post(`http://localhost:3333/songss/{id}/playlist`, newPlaylist)
      .then(
        (response) => {
          setPlaylist([response.data, ...playlist]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (playlistId) => {
    axios
      .delete(`http://localhost:3333/songs/${id}/playlist/${playlistId}`)
      .then(
        (response) => {
          const copyPlaylistArray = [...playlist];
          const indexDeletedPlaylist = copyPlaylistArray.findIndex((playlist) => {
            return playlist.id === id;
          });
          copyPlaylistArray.splice(indexDeletedPlaylist, 1);
          setPlaylist(copyPlaylistArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };
  const handleEdit = (updatedPlaylist) => {
    console.log(updatedPlaylist)
    axios
      .put(`http://localhost:3333/songs/${id}/playist/${updatedPlaylist.id}`, updatedPlaylist)
      .then((response) => {
        const copyPlaylistArray = [...playlist];
        const indexUpdatedPlaylist= copyPlaylistArray.findIndex((playlist) => {
          return playlist.id === updatedPlaylist.id;
        });
        copyPlaylistArray[indexUpdatedPlaylist] = response.data;
        setPlaylist(copyPlaylistArray);
      })
      .catch((c) => console.warn("catch", c));
  };
  return (
    <section className="Playlists">
      <h2>Playlists</h2>
      <PlaylistForm handleSubmit={handleAdd}>
        <h3>Add a New Playlist</h3>
      </PlaylistForm>
      {playlist.map((plays) => (
        <Playlist
          key={playlist.id}
          playlist={playlist}
          handleSubmit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  );
}

export default Playlists;
