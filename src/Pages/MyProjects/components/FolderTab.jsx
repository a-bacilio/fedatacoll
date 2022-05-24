import React from "react";
import { Link } from "react-router-dom";
import ShowShareLinkButton from "./ShowShareLinkButton";
import { BsFillPencilFill } from "react-icons/bs";
import { RiTableAltFill } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";

function FolderTab({ item, refetch, setmodal }) {
  return (
    <div className="flex flex-col items-start w-full h-16 bg-yellow-400">
      <div className="h-10 p-2 ml-2 translate-y-1 bg-yellow-400 border-t-2 border-l-2 border-r-2 border-black rounded-t-lg">
        <span className="flex flex-row justify-center w-full text-black hover:font-bold">
          {item.name} [{item.questions.length}]
          <Link to={`/myProjects/${item._id}`} className="hidden lg:block">
            <BsFillPencilFill className="mx-2 cursor-pointer sm:w-8 sm:px-2" />
          </Link>
          <Link
            to={`/myProjects/registers/${item._id}`}
            className="hidden lg:block"
          >
            <RiTableAltFill className="mx-2 cursor-pointer sm:w-8 sm:px-2" />
          </Link>
          <ShowShareLinkButton
            setmodal={setmodal}
            className="mx-2 cursor-pointer sm:w-8 sm:px-2"
            projectId={item._id}
          />
          <Link to={`/sharelink/${item._id}`} target="_blank">
            <MdVisibility className="mx-2 cursor-pointer sm:w-8 sm:px-2" />
          </Link>
        </span>
      </div>

      <div className="w-full h-10 bg-yellow-400 border-t-2 border-black"></div>
    </div>
  );
}

export default FolderTab;
