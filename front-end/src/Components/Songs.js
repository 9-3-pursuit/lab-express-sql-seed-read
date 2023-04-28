import axios from "axios";
// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Song from "./Song";

// const API = process.env.REACT_APP_API_URL;

function Bookmarks() {
  const [songs, setSongs] = useState([]);
  // const { id } = useParams;
  useEffect(() => {
    axios
      .get(`http://localhost:3333/songs/`)
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.warn("catch", error);
      });
  }, []);
  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
             
            
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

export default Bookmarks;
