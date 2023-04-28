import { Link } from "react-router-dom";

function Song({ song, index }) {
  return (
    <tr>
      <td>{song.id}</td>
      <td>
        <Link to={`/songs/${index}`}>{song.title}</Link>
      </td>
      <td>
        <Link to={`/songs/${index}`}>{song.is_favorite}</Link>
      </td>
      <td>
        <Link to={`/songs/${index}`}>{song.artist}</Link>
      </td>
      <td>
        <Link to={`/songs/${index}`}>{song.time}</Link>
      </td>
    </tr>
  );
}

export default Song;
