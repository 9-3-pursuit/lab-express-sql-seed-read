import { Link } from "react-router-dom";

function Album({ album }) {
  return (
    <tr>
      <td>
        {album.name}
      </td>
      <td>
        {album.artist}
      </td>
      <td>
        {album.year}
      </td>
      <td>
        {album.producer}
      </td>
      <td>
        <Link to={`/albums/${album.album_id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Album;