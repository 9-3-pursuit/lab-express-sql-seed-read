import { Link } from "react-router-dom";

function Song({ song }) {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={song.url} target="_blank" rel="noreferrer">
          {song.name}
        </a>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>{song.artist}</Link>      
      </td>
      <td className="td">{song.time}</td>
    </tr>
  );
}

export default Song;