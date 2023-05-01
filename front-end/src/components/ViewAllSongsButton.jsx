import { useNavigate } from "react-router-dom"
import './ViewAllSongsButton.css'

const ViewAllSongsButton = () => {

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        navigate('/songs')
    }

    return (
        <form onSubmit={handleSubmit}>

            <button className="nav-button">View Your Songs</button>
            
        </form>
    )
}

export default ViewAllSongsButton 