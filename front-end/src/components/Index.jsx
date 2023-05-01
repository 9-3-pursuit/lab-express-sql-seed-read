import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Index() {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/songs`)
        .then((res) => {
            setSongs(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])
    
  return (
    <div className="Song">
        <h1>Songs</h1>
        <h3>Bank Account Total: </h3>
        <section className="Songs">
        <table>
            <tbody>
                {songs ? songs.map((song, index) =>  
                <tr key={index}>
                    <td><Link to={`/songs/${song.id}`}>{song.name}</Link></td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.time}</td>
                    <td>{song.is_favorite ? "⭐️" : null}</td>
                </tr>
                ) : null}
            </tbody>
        </table>
        </section>
    </div>
  )
}

export default Index