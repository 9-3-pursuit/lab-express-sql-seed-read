import Songs from "../Components/Songs";
function Index() {
  return (
    <div className="flex flex-col items-center m-6 p-6 justify-center bg-pink-50">
      <h1 className="text-4xl font-bold mb-6">All Songs</h1>
      <Songs />
    </div>
  );
}

export default Index;
