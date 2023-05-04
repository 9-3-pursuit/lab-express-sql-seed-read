import { useState, useEffect } from "react";
import axios from "axios";
import Song from "./Song";


export default function Songs() {
    const [songs, setSongs] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/songs`)
            .then((res) => {
                setSongs(res.data);
            })
            .catch((error) => { 
                console.log(error);
            })
    }, [API]);

    return (
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-[repeat(3,_minmax(200px,_2fr))_repeat(4,_1fr)] w-full">
          <h2 className="border-y border-gray text-left font-semibold pl-2 h-14 flex items-center bg-neutral bg-opacity-30">Song</h2>
          <h2 className="border-y border-gray text-left font-semibold pl-2 h-14 flex items-center bg-neutral bg-opacity-30">Artist</h2>
          <h2 className="border-y border-gray text-left font-semibold pl-2 h-14 flex items-center bg-neutral bg-opacity-30">Album</h2>
          <h2 className="border-y border-gray text-left font-semibold pl-2 h-14 flex items-center bg-neutral bg-opacity-30">Time</h2>
          <h2 className="border-y border-gray font-semibold pl-8 h-14 flex items-center jus bg-neutral bg-opacity-30 col-span-3">
            Action
          </h2>

          <div className="flex flex-col col-span-7">
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </div>
        </div>
      </div>
    );
}