import { useNavigate } from "react-router-dom";
import './MyFavoritesButton.css'

const MyFavoritesButton = () => {

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/songs/my-favorites')
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <button className="nav-button">View My Favorites</button>
        </form>
    )
}

export default MyFavoritesButton