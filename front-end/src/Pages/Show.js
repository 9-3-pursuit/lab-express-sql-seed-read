import SongDetails from "../Components/SongDetails";
function Show() {
  return (
    <div className="flex flex-col items-center m-6 p-6 justify-center bg-pink-50">
      <h1 className="text-4xl font-bold mb-6"> Show Song </h1>
      <SongDetails />
    </div>
  );
}

export default Show;
