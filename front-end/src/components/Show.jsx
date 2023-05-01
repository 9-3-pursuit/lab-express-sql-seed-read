import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Show() {
    const [song, setSong] = useState({});
    const {index} = useParams();
    console.log(index)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/songs/${index}`)
        .then((res) => {
            setSong(res.data);
            console.log(res)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

  return (
    <div className="Song-Details">
        <p><strong>Name :</strong> {song.name}</p>
        <p><strong>Artist :</strong> {song.artist}</p>
        <p><strong>Album :</strong> {song.album}</p>
        <p><strong>Time :</strong> {song.time}</p>
        <p><strong>Favorite :</strong> {song.is_favorite ? "⭐️" : null}</p>
    </div>
  )
}

export default Show