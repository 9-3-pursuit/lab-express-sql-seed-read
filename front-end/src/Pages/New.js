import SongNewForm from "../Components/SongNewForm";
function New() {
  return (
    <div className="bg-pink-50 shadow-lg rounded-lg p-6">
      <h1 className="text-xl font-bold mb-4">Add New Song </h1>
      <SongNewForm />
    </div>
  );
}
export default New;
