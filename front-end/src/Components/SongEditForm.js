// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";

// const API = process.env.REACT_APP_API_URL;

// function SongEditForm() {
//   let { id } = useParams();
//   let navigate = useNavigate();

//   const [song, setSong] = useState({
//     name: "",
//     artist: "",
//     album: "",
//     time: "",
//     is_favorite: false,
//   });

//   const updatedSong = (updateSong) => {
//     axios
//       .put(`${API}/songs/${id}`, updateSong)
//       .then(
//         () => {
//           navigate(`/songs/${id}`);
//         },
//         (error) => console.error(error)
//       )
//       .catch((c) => console.warn("catch", c));
//   };

//   const handleTextChange = (event) => {
//     setSong({ ...song, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = () => {
//     setSong({ ...song, is_favorite: !song.is_favorite });
//   };

//   useEffect(() => {
//     axios.get(`${API}/songs/${id}`)
//     .then(
//       (response) => setSong(response.data),
//       //(error) => navigate(`/not-found`)
//     );
//   }, [id, navigate]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updatedSong(song, id);
//   };

//   return (
//     <div className="Edit">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Song Name:</label>
//         <input
//           id="name"
//           value={song.name}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Name of Song"
//           required
//         />
//         <br/>
//         <label htmlFor="artist">Artist:</label>
//         <input
//           id="artist"
//           type="text"
//           value={song.artist}
//           onChange={handleTextChange}
//           placeholder="Name of Artist"
//           required
//         />
//         <br/>
//         <label htmlFor="album">Album:</label>
//         <input
//           id="album"
//           type="text"
//           name="album"
//           value={song.album}
//           onChange={handleTextChange}
//           placeholder="Name of Album"
//           required
//         />
//         <br/>
//         <label htmlFor="time">Time:</label>
//         <input
//           id="time"
//           type="text"
//           name="time"
//           value={song.time}
//           onChange={handleTextChange}
//           placeholder="Duration of Song"
//           required
//         />
//         <br/>
//         <label htmlFor="is_favorite">Favorite:</label>
//         <input
//           id="is_favorite"
//           type="checkbox"
//           onChange={handleCheckboxChange}
//           checked={song.is_favorite}
//         />
//         <br/>
//         <div className='nav-buttons'>
//           <Link to={`/songs/${id}`}><button>Back</button></Link> 
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <button type="submit">Submit</button>
//         </div>
//       </form>
      
//     </div>
//   );
// }

// export default SongEditForm;