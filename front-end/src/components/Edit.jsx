import axios from 'axios';
import React from 'react'
import {useState, useEffect} from "react"
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const [editSong, setEditSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });
    let navigate = useNavigate();
    const {id} = useParams();

    function handleTextChange (event) {
        setEditSong({...editSong, [event.target.id]: event.target.value });
    }
    function handleCheckboxChange (event) {
        setEditSong({...editSong, is_favorite: event.target.checked})
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/songs/${id}`)
        .then((res) => {
            setEditSong(res.data);
        })
        .catch((error) => {
            console.log("catch", error);
        })
    }, [])

    function handleSubmit (event) {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/songs/${id}`, editSong)
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
            value={editSong.name}
            onChange={handleTextChange}/>
            <label htmlFor='artist'>Artist: </label>
            <input 
            type="text" 
            id="artist" 
            name="artist"
            required
            value={editSong.artist}
            onChange={handleTextChange}/>
            <label htmlFor='album'>Album: </label>
            <input 
            type="text" 
            id="album" 
            name="album"
            required
            value={editSong.album}
            onChange={handleTextChange}/>
            <label htmlFor='time'>Time: </label>
            <input 
            type="text" 
            id="time" 
            name="time"
            required
            value={editSong.time}
            onChange={handleTextChange}/>
            <label htmlFor='is_favorite'>Favorite: </label>
            <input 
            type="checkbox" 
            id="is_favorite"
            name="is_favorite"
            onChange={handleCheckboxChange}
            value={editSong.is_favorite}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Edit