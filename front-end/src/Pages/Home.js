import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col items-center m-6 p-6 justify-center">
      <h1 className="text-4xl font-bold mb-6 underline">
        <Link to="/">Tuner App</Link>
      </h1>
    </div>
  );
}

export default Home;
