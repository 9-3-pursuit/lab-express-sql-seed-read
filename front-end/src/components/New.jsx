import axios from 'axios';
import React from 'react'
import {useState} from "react"
import { useNavigate } from 'react-router-dom'

function New() {
    const [newSong, setNewSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });
    let navigate = useNavigate();

    function handleTextChange (event) {
        setNewSong({...newSong, [event.target.id]: event.target.value });
    }
    function handleCheckboxChange (event) {
        setNewSong({...newSong, is_favorite: event.target.checked})
    }

    function handleSubmit (event) {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/songs`, newSong)
        .then(() => {
            navigate("/songs")
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Song Name: </label>
            <input 
            type="text" 
            id="name" 
            name="name"
            required
            onChange={handleTextChange}/>
            <label htmlFor='artist'>Artist: </label>
            <input 
            type="text" 
            id="artist" 
            name="artist"
            required
            onChange={handleTextChange}/>
            <label htmlFor='album'>Album: </label>
            <input 
            type="text" 
            id="album" 
            name="album"
            required
            onChange={handleTextChange}/>
            <label htmlFor='time'>Time: </label>
            <input 
            type="text" 
            id="time" 
            name="time"
            required
            onChange={handleTextChange}/>
            <label htmlFor='is_favorite'>Favorite: </label>
            <input 
            type="checkbox" 
            id="is_favorite"
            name="is_favorite"
            required
            onChange={handleCheckboxChange}
            value={newSong.is_favorite}/>
        </form>
    </div>
  )
}

export default New