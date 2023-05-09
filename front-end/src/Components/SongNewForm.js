import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SongNewForm(props) {
  let { albumId } = useParams();
  const { songDetails } = props;

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
    album_id: albumId,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (songDetails) {
      setSong(songDetails);
    }
  }, [albumId, songDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(song, albumId);
    if (songDetails) {
        console.log("song id:", songDetails.song_id)
      props.toggleView();
    }
    setSong({
      name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
    album_id: albumId,
    });
  };
  return (
    <div className="Edit">
      {/* renders the children elements of this component   */}
      {/* <ReviewForm> some child element </ReviewFrom> */}
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          name="name"
          onChange={handleTextChange}
          placeholder="Song Name"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          name="artist"
          required
          value={song.artist}
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="time"
          values={song.time}
          onChange={handleTextChange}
        />
       
       <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          values={song.album}
          onChange={handleTextChange}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default SongNewForm;












