import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function SongsIndex() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["songs"],
    queryFn: async () => {
      const result = await fetch(`${process.env.REACT_APP_API_URL}/songs`);
      const songs = result.json();
      return songs;
    },
  });

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1>Loading...</h1>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1>There was an error: {error}</h1>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100 pt-12">
      <h1 className="mb-2 text-3xl">Songs Index</h1>
      {data.map((song) => {
        return (
          <Link to={`/songs/${song.id}`} key={song.id} className="w-3/4">
            <div className="flex w-full justify-between border p-2 sm:hover:bg-gray-500">
              <div className="flex space-x-2">
                <h1>{song.name}</h1>
                <h1>{song.artist}</h1>
              </div>
              <div className="flex space-x-2">
                <h1>{song.time}</h1>
                {song.is_favorite && <h1>⭐️</h1>}
              </div>
            </div>
          </Link>
        );
      })}
    </main>
  );
}
