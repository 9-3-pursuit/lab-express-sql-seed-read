import { Link } from "react-router-dom";
import './NewSongsButton.css'


const NewSongsButton = () => {

   

    const handleSubmit = (event) => {
        event.preventDefault()
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

            <Link to='/songs/new'> <input className="nav-button" type="submit"  value="New Song" /></Link>
                
            </form>
        </div>
    )

}

export default NewSongsButton