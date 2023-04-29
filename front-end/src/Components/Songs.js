import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get(`${API}/songs`).then((response) => {
      setSongs(response.data)
    }).catch((e) => {
      console.warn("catch", e)
    });
  }, []);
  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Fav</th>
              <th>Song</th>
              <th>Artist</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;