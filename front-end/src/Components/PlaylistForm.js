import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PlaylistForm(props) {
  let { id } = useParams();
  const { playlistDetails } = props;

  const [newPlaylist, setNewPlaylist] = useState({
    name: "",
    description: "",
    is_favorite: false,
    song_id: id,
  });

  const handleTextChange = (event) => {
    setNewPlaylist({ ...newPlaylist, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setNewPlaylist({ ...newPlaylist, is_favorite: !newPlaylist.is_favorite });
  };

  useEffect(() => {
    if (playlistDetails) {
      setNewPlaylist(playlistDetails);
    }
  }, [id, playlistDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(newPlaylist, id);
    if (playlistDetails) {
      console.log("playlist id:", playlistDetails.id);
      props.toggleView();
    }
    setNewPlaylist({
      name: "",
      description: "",
      is_favorite: false,
      song_id: id,
    });
  };
  return (
    <div className="Edit">
      {/* renders the children element of this component */}
      {/* <ReviewForm> some child element </PlaylistFrom> */}
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={newPlaylist.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Song Name"
          required
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          required
          value={newPlaylist.description}
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={newPlaylist.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default PlaylistForm;
