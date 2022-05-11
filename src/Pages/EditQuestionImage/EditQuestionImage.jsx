import React from "react";
import { useParams } from "react-router-dom";
import { useGetQuestionDataQuery } from "../../redux/store/querys/questions-query";
import { Link } from "react-router-dom";
import { MdAssignmentReturn } from "react-icons/md";

import Card from "../Shared/Components/Card";
import EditQuestionImageOptionsForm from "./components/EditQuestionImageForm";
import TitleBox from "../Shared/Components/TitleBox";

function EditQuestionImage() {
  const { questionid } = useParams();
  const { data, refetch } = useGetQuestionDataQuery({ questionid });
  return (
    <>
      <TitleBox className="mb-5 text-2xl">
        <Link to={`/myProjects/${data && data.project}`}>
          <MdAssignmentReturn className="inline text-fuchsia-500" />
        </Link>
        Estas editando: {(data && data.name) || "..."}
      </TitleBox>
      <Card className="max-w-2xl mx-auto w-full">
        <EditQuestionImageOptionsForm refetch={refetch} data={data} />
      </Card>
    </>
  );
}

export default EditQuestionImage;
