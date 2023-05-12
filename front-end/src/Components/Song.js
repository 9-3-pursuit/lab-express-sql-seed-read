// TODO: http://localhost:3000/song -> not found page, functionality in progress(?)
import { Link } from "react-router-dom";

function Song({ song }) {
  return (
    <tr>
      <td className="Song">
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={song.name} target="_blank" rel="noreferrer">
          {song.name}
        </a>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>✏️</Link>
      </td>
    </tr>
   
  );
}

export default Song;
