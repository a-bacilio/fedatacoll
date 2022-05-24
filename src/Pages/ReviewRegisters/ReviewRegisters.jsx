import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllRegistersQuery } from "../../redux/store/querys/formquestions-query";
import NotificationSpan from "../Shared/Components/NotificationSpan";

import RegistersTable from "./components/RegistersTable";

import { Link } from "react-router-dom";
import { useGetOneProjectQuery } from "../../redux/store/querys/projects-query";
import NavBar from "../Shared/Components/NavBar";
import RegistersGraphs from "./components/RegistersGraphs";

function ReviewRegisters() {
  const { projectid } = useParams();
  const { data, isSuccess, isLoading, isError, error, refetch } =
    useGetAllRegistersQuery({ projectid });

  const { error: projectError } = useGetOneProjectQuery({
    projectid,
  });
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
            Registros capturados
          </div>
          <div className="flex flex-col items-center w-full px-1 py-10 bg-yellow-400 border-t-2 border-black">
            {isSuccess && (
              <div className="w-full max-w-6xl p-5 mt-5 bg-white shadow-lg shadow-black">
                <h1 className="w-full mb-5 text-2xl font-bold">Reporte</h1>

                <RegistersGraphs projectid={projectid} />

                <RegistersTable data={data || []} refetch={refetch} />
              </div>
            )}
            {isLoading && (
              <NotificationSpan className="w-full p-5">
                Cargando..
              </NotificationSpan>
            )}
            {isError && (
              <NotificationSpan className="w-full p-5">
                Hubo un error: {projectError.data.msg}
              </NotificationSpan>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewRegisters;
