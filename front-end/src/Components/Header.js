import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-secondary from-80% to-primary h-20 w-full flex items-center justify-center">
      <Link to={"/songs"} className="text-light font-bold text-4xl px-4 rounded hover:text-primary">TUNER</Link>
      <SearchBar />
    </div>
  )
}