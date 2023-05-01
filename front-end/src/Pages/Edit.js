import SongEditForm from "../Components/SongEditForm";
function Edit() {
  return (
    <div className="flex flex-col items-center m-6 p-6 justify-center bg-pink-50">
      <h1 className="text-4xl font-bold mb-6"> Edit Song</h1>
      <SongEditForm />
    </div>
  );
}

export default Edit;
