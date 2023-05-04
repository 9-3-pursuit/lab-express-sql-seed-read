import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MdAlbum } from "react-icons/md";

const API = process.env.REACT_APP_API_URL;

export default function SongDetails() {
    const [songDetails, setSongDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((res) => {
                setSongDetails(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id, songDetails]);

    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="border flex flex-col items-center justify-center w-3/5 h-3/5 relative">
          <div className="flex">
            <MdAlbum size={100} className="absolute left-4 top-4" />
            <h2>song</h2>
            {songDetails.name}
          </div>
          {songDetails.artist}
          {songDetails.album}
          {songDetails.time}
        </div>
      </div>
    );
}