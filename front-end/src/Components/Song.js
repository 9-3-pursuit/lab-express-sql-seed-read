import { useState } from "react";
import { Link } from "react-router-dom";
import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";

export default function Song({ song }) {
    const [hover, setHover] = useState({
        show: false,
        edit: false,
        delete: false
    });
    const handleMouseEnter = (modal) => {
        setHover({...hover, [modal]: true})
    }
    const handleMouseLeave = (modal) => {
        setHover({...hover, [modal]: false});
    }

    console.log("hover:", hover)

    return (
      <div className="grid grid-cols-[repeat(3,_minmax(200px,_2fr))_repeat(4,_1fr)] text-dark">
        <div className="border-b flex items-center text-left font-semibold pl-2 h-14">
          {song.name}
        </div>
        <div className="border-b flex items-center text-left pl-2 h-14">
          {song.artist}
        </div>
        <div className="border-b flex items-center text-left pl-2 h-14">
          {song.album}
        </div>
        <div className="border-b flex items-center text-left pl-3 h-14">
          {song.time}
        </div>
        <div className="border-b w-full h-14 flex justify-center items-center relative">
          <Link to={`/songs/${song.id}`}>
            <AiOutlineEye
              className="text-blue"
              onMouseEnter={() => handleMouseEnter("show")}
              onMouseLeave={() => handleMouseLeave("show")}
              size={28}
            />
          </Link>
          {hover.show && (
            <div className="bg-neutral bg-opacity-30 absolute left-0 text-sm font-semibold rounded p-1">
              View
            </div>
          )}
        </div>
        <div className="border-b w-full h-14 flex justify-center items-center relative">
          <Link to={`/songs/${song.id}/edit`}>
            <MdModeEdit
              className="text-dark"
              onMouseEnter={() => handleMouseEnter("edit")}
              onMouseLeave={() => handleMouseLeave("edit")}
              size={22}
            />
          </Link>
          {hover.edit && (
            <div className="bg-neutral bg-opacity-30 absolute left-2 text-sm font-semibold rounded p-1">
              Edit
            </div>
          )}
        </div>
        <div className="border-b w-full h-14 flex justify-center items-center relative">
          <MdOutlineDelete
            className="cursor-pointer text-secondary"
            onMouseEnter={() => handleMouseEnter("delete")}
            onMouseLeave={() => handleMouseLeave("delete")}
            size={22}
          />
          {hover.delete && (
            <div className="bg-neutral bg-opacity-30 absolute left-0 text-sm font-semibold rounded p-1">
              Delete
            </div>
          )}
        </div>
      </div>
    );
}

