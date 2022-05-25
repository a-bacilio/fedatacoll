import React from "react";
import { useParams } from "react-router-dom";
import { useGetQuestionDataQuery } from "../../redux/store/querys/questions-query";
import { Link } from "react-router-dom";
import { MdAssignmentReturn } from "react-icons/md";

import Card from "../Shared/Components/Card";
import EditQuestionImageOptionsForm from "./components/EditQuestionImageForm";
import TitleBox from "../Shared/Components/TitleBox";
import NavBar from "../Shared/Components/NavBar";

function EditQuestionImage() {
  const { questionid } = useParams();
  const { data, refetch } = useGetQuestionDataQuery({ questionid });
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-stone-800 ">
      <NavBar>
        <Link
          className="px-2 py-1 font-bold text-black bg-white rounded-lg"
          to={`/myProjects/${data && data.project}`}
        >
          Volver
        </Link>
      </NavBar>
      <div className="w-full h-full min-h-screen my-4 bg-stone-800">
        <div className="flex flex-col items-start w-full h-16">
          <div className="flex flex-row items-center h-10 p-2 ml-2 translate-y-1 bg-yellow-400 border-t-2 border-l-2 border-r-2 border-black rounded-t-lg ">
            Editando Pregunta
          </div>
          <div className="flex flex-col items-center w-full px-1 py-10 bg-yellow-400 border-t-2 border-black">
            <div className="w-full max-w-6xl p-5 mt-5 bg-white shadow-lg shadow-black">
              {data && (
                <EditQuestionImageOptionsForm refetch={refetch} data={data} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditQuestionImage;
