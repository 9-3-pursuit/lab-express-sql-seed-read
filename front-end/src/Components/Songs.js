//import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Song from "./Song";

// const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  let { index } = useParams();
    let navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3333/songs/${index}`)
    .then((response) => response.json())
      .then((data) => {
        setSongs(data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index,navigate]);
  return (
    <div className="Songs">
      <h2>All Songs:</h2>
      <section>
        <table>
          <thead>
            <tr>
              <th>Title: </th>
              <th>Favorite ⭐️</th>
              <th>Artist: </th>
              <th>Time: </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => {
              return <Song key={index} song={song} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;
