import PlaylistForm from "./PlylistForm";
import { useState } from "react";
function Playlist({ playlist, handleDelete, handleSubmit }) {
  const [playlistEditForm, togglePlaylistEditForm] = useState(false);

  const toggleView = () => {
    togglePlaylistEditForm(!playlistEditForm);
  };
  return (
    <div className="Playlist">
      <button onClick={toggleView}>Edit this review</button>
      {playlistEditForm ? (
        <PlaylistForm
          playlistDetails={playlist}
          handleSubmit={handleSubmit}
          toggleView={toggleView}
        />
      ) : (
        <div>
          <h5>
            {playlist.name} <span>{playlist.is_favorite}</span>
          </h5>
          
          <p>{playlist.description}</p>
        </div>
      )}
      <button onClick={() => handleDelete(playlist.id)}>delete</button>
    </div>
  );
}

export default Playlist;
