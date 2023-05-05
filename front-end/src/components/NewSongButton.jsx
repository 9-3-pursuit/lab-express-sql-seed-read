import { useNavigate } from "react-router-dom";
import './NewSongButton.css'

const NewSongButton = () => {

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/songs/new')
    }

    return (
        <form onSubmit={handleSubmit}>
            <button className="nav-button">Create New Song</button>
        </form>
    )
}

export default NewSongButton