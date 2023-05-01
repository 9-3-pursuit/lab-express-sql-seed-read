
import { MdSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <div>
      <form className="flex items-center">
        <input type="text" placeholder="Search" className="rounded-2xl pl-4 w-60 focus:outline-secondary" />
        <button className="border-r border-primary rounded-2xl relative right-8 w-8 h-6">
          <MdSearch size={22} />
        </button>
      </form>
    </div>
  );
}
