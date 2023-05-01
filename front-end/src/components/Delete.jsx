import { useNavigate, useParams } from "react-router-dom";
import './Delete.css'

const Delete = () => {

  const { id } = useParams()
  const navigate = useNavigate()

    
  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this song ? ")) {
      fetch(`${process.env.REACT_APP_BACKEND_API}/songs/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          navigate("/songs");
        })
        .catch((error) => {
          console.log(error);
          navigate("/not-found");
        });
    }
  }

 

    return (
      <div>
        
        <button className="nav-button" onClick={handleDelete}>Delete</button>
        
      </div>
    )
  }


export default Delete
