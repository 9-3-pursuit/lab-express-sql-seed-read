import SongDetails from "../Components/SongDetails";
function Show() {
  return (
    <div className="flex flex-col p-4 justify-center bg-pink-50">
      <h1 className="text-3xl font-bold mb-4"> Show Song </h1>
      <SongDetails />
    </div>
  );
}

export default Show;
