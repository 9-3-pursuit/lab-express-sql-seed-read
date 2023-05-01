import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './MyFavorites.css'


const MyFavorites = () => {

    const [myFavorites, setMyFavorites] = useState([])


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/songs/`)
            .then(response => setMyFavorites(response.data))
            .catch(error => error)
        
    }, [])
    
    

    const favoriteSongs = myFavorites.filter((song) => song.is_favorite)

    return (
        <form>

            {favoriteSongs.map((favorite) => {
                return <div className='favorite' key={favorite.id}>
                    
                    <Link to={`/songs/${favorite.id}`}><h3>Name: {favorite.name}</h3></Link>
                    <p>Artist: {favorite.artist }</p>
                    <p>Album: {favorite.album }</p>
                    <p>Duration: {favorite.time }</p>
        
                </div>
            })}

           
            
        </form>
    )
}

export default MyFavorites