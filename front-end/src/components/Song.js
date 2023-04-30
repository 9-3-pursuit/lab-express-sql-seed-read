
function Song({ song }) {

    return (
        <tr className="Song">
            <td>
                {song.is_favorite ? (
                    <span>⭐️</span>
                ) : (
                    <span>&nbsp; &nbsp; &nbsp;</span>
                )}
            </td>
            <td>
                <a href={`/songs/${song.id}`}>{song.name}</a>
            </td>
            <td>
                <a href={`/songs/${song.id}`}>{song.artist}</a>
            </td>
            <td>
                <p>{song.time}</p>
            </td>
            <td>
                <button><a href={`/songs/${song.id}`}>Edit</a></button>
            </td>
        </tr>

    )
}

export default Song