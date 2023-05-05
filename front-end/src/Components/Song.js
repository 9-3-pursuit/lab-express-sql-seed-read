import { Link, useParams } from "react-router-dom";

export default function Song({ song }) {
  let { id } = useParams();

  return (
    <tr>
      <td>
        {song.is_favorite ? <span>🌟</span> : <span>&nbsp; &nbsp; &nbsp;</span>}
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </td>
      <td>artist {song.artist}</td>
      <td>{song.time}</td>
      <td>{song.album}</td>
      <td>
        <Link to={`/songs/${song.id}`}>🔏</Link>
      </td>
    </tr>
  );
}
