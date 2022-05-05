import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllRegistersQuery } from "../../redux/store/querys/formquestions-query";
import NotificationSpan from "../Shared/Components/NotificationSpan";
import TitleBox from "../Shared/Components/TitleBox";
import RegistersTable from "./components/RegistersTable";
import { MdAssignmentReturn } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetOneProjectQuery } from "../../redux/store/querys/projects-query";

function ReviewRegisters() {
  const { projectid } = useParams();
  const { data, isSuccess, isLoading, isError, error, refetch } =
    useGetAllRegistersQuery({ projectid });
  const { data: projectData, error: projectError } = useGetOneProjectQuery({
    projectid,
  });
  return (
    <>
      <TitleBox className="mb-5 text-2xl">
        <Link to="/myProjects">
          <MdAssignmentReturn className="inline text-fuchsia-500" />
        </Link>
        Registros de: {(projectData && projectData.name) || "..."}
      </TitleBox>
      {isSuccess && <RegistersTable data={data || []} refetch={refetch} />}
      {isLoading && (
        <NotificationSpan className="w-full p-5">Cargando..</NotificationSpan>
      )}
      {isError && (
        <NotificationSpan className="w-full p-5">
          Hubo un error: {projectError.data.msg}
        </NotificationSpan>
      )}
    </>
  );
}

export default ReviewRegisters;
