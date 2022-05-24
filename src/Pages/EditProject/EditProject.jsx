import React from "react";
import { useParams } from "react-router-dom";
import { useGetOneProjectQuery } from "../../redux/store/querys/projects-query";
import NotificationSpan from "../Shared/Components/NotificationSpan";
import TitleBox from "../Shared/Components/TitleBox";
import QuestionsTable from "./components/QuestionsTable";
import { MdAssignmentReturn } from "react-icons/md";
import { Link } from "react-router-dom";
import Card from "../../Pages/Shared/Components/Card";
import CreateQuestionForm from "./components/CreateQuestionForm";
import NavBar from "../Shared/Components/NavBar";
import DeleteProjectButton from "../MyProjects/components/DeleteProjectButton";

function EditProject() {
  const { projectid } = useParams();
  const { data, isSuccess, isLoading, isError, error, refetch } =
    useGetOneProjectQuery({ projectid });
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-stone-800 ">
      <NavBar>
        <Link
          className="px-2 py-1 font-bold text-black bg-white rounded-lg"
          to="/myprojects"
        >
          Volver
        </Link>
      </NavBar>
      <div className="w-full h-full min-h-screen my-4 bg-stone-800">
        <div className="flex flex-col items-start w-full h-16">
          <div className="flex flex-row items-center h-10 p-2 ml-2 translate-y-1 bg-yellow-400 border-t-2 border-l-2 border-r-2 border-black rounded-t-lg ">
            {(data && data.name) || "..."}{" "}
            {isSuccess && (
              <DeleteProjectButton
                projectid={data._id}
                refetch={refetch}
                className="hidden mx-2 lg:block"
              />
            )}
          </div>
          <div className="flex flex-col items-center w-full px-1 py-10 bg-yellow-400 border-t-2 border-black">
            {isSuccess && (
              <div className="w-full max-w-6xl p-5 mt-5 bg-white shadow-lg shadow-black">
                <QuestionsTable
                  data={(data && data.questions) || []}
                  refetch={refetch}
                />
              </div>
            )}
            {isLoading && (
              <NotificationSpan className="w-full p-5">
                Cargando..
              </NotificationSpan>
            )}
            {isError && (
              <NotificationSpan className="w-full p-5">
                Hubo un error: {error.data.msg}
              </NotificationSpan>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProject;
