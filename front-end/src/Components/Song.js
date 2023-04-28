import { Link } from "react-router-dom";

function Song({ song}) {
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
        <a href={song.title} target="_blank" rel="noreferrer">
       
          {song.is.is_favorite}
          {song.artist}
          {song.time}

        </a>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>✏️</Link>
      </td>
    </tr>
        // <tr>
        //   <td>
        //   {song.id}
        //   </td>
        //   <td>
        //    <Link to={`/songs/${index}`}>{song.title}</Link>
        //   </td>
        //   <td>
        //     <Link to={`/songs/${index}`}>{song.is_favorite}</Link>
        //   </td>
        //   <td>
        //     <Link to={`/songs/${index}`}>{song.artist}</Link>
        //   </td>
        //   <td>
        //     <Link to={`/songs/${index}`}>{song.time}</Link>
        //   </td>
        // </tr>
      );
    }



export default Song;