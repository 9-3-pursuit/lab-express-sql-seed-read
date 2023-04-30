import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
    const [song, setSong] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((res) => {
                console.log(res)
                setSong(res.data)
            })
            .catch((e) => {
                console.warn("catch:", e);
            });
    }, [id])

    const handleDelete = () => {
        deleteSong();
      };
    
      const deleteSong = () => {
        axios
          .delete(`${API}/songs/${id}`)
          .then(() => {
            navigate(`/songs`);
          })
          .catch((e) => {
            console.warn("catch:", e);
          });
      };

    return (
        <div className="Song-Details">
            <div className="title">{song.name}</div>
            <div className="subtitle">by {song.artist}</div>
            <div className="details">
                <span>Album:</span> {song.album}
                <br />
                <span>Duration:</span> {song.time}
            </div>
            <div className="favorite">
                {song.is_favorite ? (
                    <span>⭐️</span>
                ) : (
                    <span>&nbsp; &nbsp; &nbsp;</span>
                )}
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>

    )
}

export default SongDetails