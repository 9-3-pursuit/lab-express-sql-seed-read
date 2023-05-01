import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function SongDetails() {
  const [showSong, setShowSong] = useState([]);
  let { id } = useParams(); // getting index from URL
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/songs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShowSong(data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }, [id, navigate]);

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this item?")) {
      fetch(`${process.env.REACT_APP_API_URL}/songs/${id}`, {
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
    <div className="Song-Details">
      <article>
        <h3>
          <strong>Serial # : </strong> {showSong.id}{" "}
        </h3>
        <h2>
          <strong>Title : </strong>
          {showSong.name} - <strong> By Artist : </strong>
          {showSong.artist}
        </h2>

        <h3>
          <strong>Album : </strong>
          {showSong.album}
        </h3>
        <h3>
          <strong>Duration : </strong>
          {showSong.time}
        </h3>
        <h3>
          <strong>Favorite Song : </strong>
          {showSong.is_favorite}
        </h3>
      </article>

      <div>
        <div>
          <button>
            {" "}
            <Link to="/songs">Back </Link>
          </button>
        </div>
        <div>
          <button>
            {" "}
            <Link to={`/songs/${id}/edit`}>Edit </Link>
          </button>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default SongDetails;
