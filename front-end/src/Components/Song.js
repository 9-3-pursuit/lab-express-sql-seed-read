//mport SongEditForm from "./SongEditForm";
//import { useState } from "react";

function Song({ song, handleDelete, handleSubmit }) {
  // const [viewEditForm, toggleEditForm] = useState(false);

  // const toggleView = () => {
  //   toggleEditForm(!viewEditForm);
  // };
  return (
    <div className="Song">
      {/* <button onClick={toggleView}>Edit this Song</button>
      {viewEditForm ? (
        <SongEditForm songDetails={song} handleSubmit={handleSubmit} toggleView={toggleView} />
      ) : (
        <div>
          <h4>
            {song.name} <span>{song.artist}</span>
          </h4>
          <h5>{song.time}</h5>
        
        </div>
      )}
      <button onClick={() => handleDelete(review.id)}>Delete</button> */}
     <h4>Song Name: {song.name} </h4>
    </div>
  );
}

export default Song;












