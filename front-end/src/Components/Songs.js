import { useState, useEffect } from "react";
import Song from "./Song";

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/songs`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSongs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Song">
      <table className="Songs table-auto w-full bg-pink-200">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Artist</th>
            <th className="px-4 py-2">Album</th>
            <th className="px-4 py-2">Duration</th>
            <th className="px-4 py-2">Favorite</th>
          </tr>
        </thead>
        <tbody>
          {songs
            ? songs.map((song) => {
                return <Song key={song.id} song={song} />;
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default Songs;
