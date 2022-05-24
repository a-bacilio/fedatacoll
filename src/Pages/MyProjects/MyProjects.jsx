import React, { useState } from "react";
import CreateProjectForm from "./components/CreateProjectForm";
import { useGetMyProjectsQuery } from "../../redux/store/querys/projects-query";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/slices/auth/authSelectors";
import FolderTab from "./components/FolderTab";
import NavBar from "../Shared/Components/NavBar";

function MyProjects() {
  const user = useSelector(userSelector);
  const { data, isSuccess, isError, isLoading, error, refetch } =
    useGetMyProjectsQuery({
      userId: user ? user.userId : "",
      token: user ? user.token : "",
    });
  const [modal, setmodal] = useState(<></>);
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-stone-800 ">
      <NavBar>Mis proyectos</NavBar>
      {modal}
      <div className="w-full h-full min-h-screen my-4 bg-stone-800">
        <div className="flex flex-col items-start w-full h-16">
          <div className="h-10 p-2 ml-2 translate-y-1 bg-yellow-400 border-t-2 border-l-2 border-r-2 border-black rounded-t-lg ">
            <CreateProjectForm refetch={refetch} />
          </div>
          <div className="w-full h-10 bg-yellow-400 border-t-2 border-black"></div>
        </div>
        {isSuccess && data.length > 0 ? (
          data.map((item, index) => (
            <FolderTab
              setmodal={setmodal}
              key={`folder-${index}`}
              item={item}
              refetch={refetch}
            />
          ))
        ) : (
          <div className="flex flex-col items-start w-full h-16 bg-yellow-400">
            <div className="h-10 p-2 ml-2 translate-y-1 bg-yellow-400 border-t-2 border-l-2 border-r-2 border-black rounded-t-lg ">
              No tienes proyectos, puedes crear uno
            </div>

            <div className="w-full h-10 bg-yellow-400 border-t-2 border-black"></div>
          </div>
        )}
        <div className="w-full bg-yellow-400 h-72"></div>
      </div>
    </div>
  );
}

export default MyProjects;
