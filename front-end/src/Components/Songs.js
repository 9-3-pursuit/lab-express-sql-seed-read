import { useState, useEffect } from "react";
import axios from "axios";
import Song from "./Song";
import Table from "react-bootstrap/Table";

export default function Songs() {
  const [songs, setSongs] = useState([]);

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => {
        setSongs(response.data);
      })
      .catch((e) => console.log(e));
  }, [API]);

  return (
    <div className="Songs">
      <h2>Songs</h2>
      <div className="songCards">
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>Title</td>
              <td>Artist</td>
              <td>is_favorite</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}