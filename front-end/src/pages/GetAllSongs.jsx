import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import NewSongsButton from "../components/NewSongsButton"
import './GetAllSongs.css'

const GetAllSongs = () => {

    const [allSongs, setAllSongs] = useState([])

    const API = `${process.env.REACT_APP_BACKEND_API}/songs`
    
    console.log('API',API)

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_BACKEND_API}/songs`)
            .then((response) => setAllSongs(response.data))
            .catch((error) => console.log(error))
    } , [])

  

    return (
        <div className="Song">
            
        <table>
            <tbody>
            {allSongs.map((song) => {
                return <div className="Songs" key={song.id}>
                    <td>
                    <Link to={`/songs/${song.id}`}>
                    <h3>Song Name: {song.name}</h3>
                    </Link></td>
                    <td><p>Album: {song.album}</p></td>
                    <td><p>Artist: {song.artist }</p></td>
                    <td><p>Is Favorite: {song.is_favorite ? '⭐️' : '❌'}</p></td>
                    <td><p>Duration: {song.time }</p></td>
                </div>
            })}
            </tbody>
         </table>

            <NewSongsButton/>


        </div>

        
    )
}

export default GetAllSongs