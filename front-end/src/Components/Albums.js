import axios from "axios";
import { useState, useEffect } from "react";
import Album from "./Album";

const API = process.env.REACT_APP_API_URL;

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/albums`)
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, []);
  return (
    <div className="Albums">
      <section>
        <table>
          <thead>
            <tr>
              <th>Albums</th>
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => {
              return <Album key={album.album_id} album={album} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Albums;