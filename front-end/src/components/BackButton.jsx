import { useNavigate } from "react-router-dom"
import './BackButton.css'

const BackButton = () => {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>

            <button className="nav-button">Back</button>

        </form>
    )
}

export default BackButton