import axios from "axios";
import { useState,useEffect } from "react";
import Song from './Song'

const API = process.env.REACT_APP_API_URL;

export default function Songs(){
const [songs,setSongs] = useState([])
//making API call using useEffect

useEffect(()=>{
  axios
  .get(`${API}/songs`)
  .then((res)=>{
    setSongs(res.data);
  })
  .catch((e)=>{
    console.warn("catch",e)
  });
},[]);

return(
  <div className="Sidebar">
    <section>
      <table>
        {/* <thead> */}
          <tr>
            
             <th>Favorite</th> <th>Name</th>
             <th> Artist</th>
             <th>Time</th> 
             <th>Album</th>
              <th>Actions</th>
          </tr>
            <tbody>
              {songs.map((song)=>{
                return <Song key={song.id} song={song}/>
              })}
            </tbody>
        {/* </thead> */}
      </table>
    </section>
  </div>
)
}