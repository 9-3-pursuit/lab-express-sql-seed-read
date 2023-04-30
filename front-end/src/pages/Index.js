import axios from "axios";
import { useState, useEffect } from "react";
import Song from "../components/Song";

const API = process.env.REACT_APP_API_URL;

function Index() {
    const [songs, setSongs] = useState([]);

    useEffect(()=>{
        axios.get(`${API}/songs`)
        .then((res)=>{
            setSongs(res.data)
        })
        .catch((e) => {
            console.warn("catch", e);
          });
    },[])

  return (
    <div className="Songs">
        <table>
  <thead>
    <tr>
      <th>Is Favorite</th>
      <th>Song</th>
      <th>Artist</th>
      <th>Duration</th>
      <button><a href="/songs/new">Add New Song</a></button>
      
    </tr>
  </thead>
  <tbody>
    {songs.map((song)=>{
        return <Song key={song.id} song={song} />
    })}
  </tbody>
</table>
    </div>
  )
}

export default Index