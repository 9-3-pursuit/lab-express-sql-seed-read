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
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Serial #</th>
            <th>Song Title</th>
            <th>Song Artist</th>
            <th>Song Album</th>
            <th>Song Duration</th>
            <th>Favorite Song</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => {
            return <Song key={index} song={song} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Songs;
