import React, { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { useDeleteProjectMutation } from "../../../redux/store/querys/projects-query";
import TitleBox from "../../Shared/Components/TitleBox";
import Button from "../../Shared/Components/Button";

function DeleteProjectButton({
  className = "",
  projectid,
  refetch = () => {},
}) {
  const [modal, setModal] = useState(false);
  const [deleteProject] = useDeleteProjectMutation();

  return (
    <>
      <BsTrashFill className={className} onClick={() => setModal(true)} />
      {modal === true && (
        <div>
          <div>
            <button
              className="px-2 mx-2 font-bold text-red-500 bg-white rounded-lg"
              onClick={async () => {
                await deleteProject(projectid);
                window.location.replace("/myprojects");
                await refetch();
                setModal(false);
              }}
            >
              Si
            </button>
            <button
              className="px-2 mx-2 font-bold text-black bg-white rounded-lg"
              onClick={() => setModal(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteProjectButton;
