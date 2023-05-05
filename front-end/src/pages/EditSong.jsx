import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './EditSong.css'



const EditSong = () => {

    const [songEdit, setSongEdit] = useState({
        album: '',
        artist: '',
        is_favorite: false,
        name: '',
        time: ''
    })

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            axios.get(`${process.env.REACT_APP_BACKEND_API}/songs/${id}`)
                .then(response => setSongEdit(response.data))
                .catch(error => console.log(error))
        }
    }, [id])

    console.log('check',`${process.env.REACT_APP_BACKEND_API}songs/${id}`)

    const handleTextChange = (event) => {
        const { name, value, type, checked } = event.target
        setSongEdit((previousState) => ({...previousState, [name]: type === 'checkbox' ? checked : value }))
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`${process.env.REACT_APP_BACKEND_API}/songs/${id}`, songEdit)
        navigate('/songs')
    }

    return (
        <div>
            <h2 className="edit">Edit</h2>
          <form className="edit" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input className="text-box" type="text" id="name" name="name" value={songEdit.name} onChange={handleTextChange} />
                <br/>  <br/>
            <label htmlFor="artist">Artist:</label>
            <input className="text-box" type="text" id="artist" name="artist" value={songEdit.artist} onChange={handleTextChange} />
                <br/>  <br/>
            <label htmlFor="album">Album:</label>
            <input className="text-box" type="text" id="album" name="album" value={songEdit.album} onChange={handleTextChange} />
                <br/>  <br/>
            <label htmlFor="time">Time:</label>
            <input className="text-box" type="text" id="time" name="time" value={songEdit.time} onChange={handleTextChange} />
                <br/>  <br/>
            <label htmlFor="is_favorite">Is Favorite:</label>
            <input className="text-box" type="checkbox" id="is_favorite" name="is_favorite" checked={songEdit.is_favorite} onChange={handleTextChange} />
                 <br/>  <br/>
            <button className="nav-button4" type="submit">Submit</button>
          </form>
        </div>
      );
}

export default EditSong;
