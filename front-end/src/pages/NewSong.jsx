import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './NewSong.css'

const NewSong = () => {

    const [newMusic, setNewMusic] = useState({
        album: '',
        artist: '',
        is_favorite: false,
        name: '',
        time: ''
    })

    const navigate = useNavigate()

    const handleTextChange = (event) => {
        const {name, value } = event.target
        setNewMusic((previousState) => ({...previousState, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_API}/songs`, newMusic)
            .then(() => { })
            .catch(error => console.log(error))
        navigate('/songs')
        
    }

    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setNewMusic((previousState) => ({ ...previousState, [name]: checked }));
    }
    
       
        
    

    return (
        <div className="new">
         <br/> <br/>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Song Name: </label>
            <input type="text" className="text-box" id="name" name="name" value={newMusic.name} required onChange={handleTextChange} />
              <br/> <br/>
            <label htmlFor="artist">Artist: </label>
            <input type="text" className="text-box" id="artist" name="artist" value={newMusic.artist} required onChange={handleTextChange} />
              <br/> <br/>
            <label htmlFor="album">Album: </label>
            <input type="text" className="text-box" id="album" name="album" value={newMusic.album} required onChange={handleTextChange} />
              <br/> <br/>
            <label htmlFor="time">Time: </label>
            <input type="text" className="text-box" id="time" name="time" value={newMusic.time} required onChange={handleTextChange} />
              <br/> <br/>
            <label htmlFor="is_favorite">Is Favorite: </label>
            <input type="checkbox" className="check-box" id="is_favorite" name="is_favorite" checked={newMusic.is_favorite} onChange={handleCheckboxChange} />
              <br/> <br/>
            <button className='nav-button' type="submit">Add Song</button>
          </form>
        </div>
      );
      
}

export default NewSong