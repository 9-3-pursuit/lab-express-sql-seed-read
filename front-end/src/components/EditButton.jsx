import { useParams, Link } from "react-router-dom"
import './EditButton.css'

const EditButton = () => {
    
    const {id} = useParams()

    return (
           <Link to={`/songs/edit/${id}`}> <button className="nav-button" type="submit">Edit</button></Link>
    )
}

export default EditButton
