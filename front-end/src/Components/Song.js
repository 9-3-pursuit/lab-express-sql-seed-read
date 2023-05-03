import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";

export default function Song({ song }) {
  return (
    <div className="grid grid-cols-[repeat(3,_minmax(200px,_2fr))_repeat(4,_1fr)] text-dark">
      <div className="border-b flex items-center text-left font-semibold pl-2 h-14">{song.name}</div>
      <div className="border-b flex items-center text-left pl-2 h-14">{song.artist}</div>
      <div className="border-b flex items-center text-left pl-2 h-14">{song.album}</div>
      <div className="border-b flex items-center text-left pl-3 h-14">{song.time}</div>
      <AiOutlineEye className="border-b border-dark w-full p-4 h-14 text-neutral font-bold"  />
      <MdModeEdit className="border-b w-full p-4 h-14" />
      <MdOutlineDelete className="border-b w-full p-4 h-14" />
    </div>
  );
}

