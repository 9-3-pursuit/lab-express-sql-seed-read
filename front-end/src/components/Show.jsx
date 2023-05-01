import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Show() {
    const [song, setSong] = useState({});
    const {id} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/songs/${id}`)
        .then((res) => {
            setSong(res.data);
            console.log(res)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    
    function handleDelete () {
        axios.delete(`${process.env.REACT_APP_API_URL}/songs/${id}`)
        .then(() => {
            navigate("/songs")
        })
    }

  return (
    <div>
    <div className="Song-Details">
        <p><strong>Name :</strong> {song.name}</p>
        <p><strong>Artist :</strong> {song.artist}</p>
        <p><strong>Album :</strong> {song.album}</p>
        <p><strong>Time :</strong> {song.time}</p>
        <p><strong>Favorite :</strong> {song.is_favorite ? "⭐️" : null}</p>
    </div>
    <div>
        <button><Link to={"/songs"}>Back</Link></button>
        <button><Link to={`/songs/${id}/edit`}>Edit</Link></button>
        <button onClick={handleDelete}>Delete</button>
    </div>
    </div>
  )
}

export default Show