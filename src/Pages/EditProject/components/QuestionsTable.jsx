import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import NotificationSpan from "../../Shared/Components/NotificationSpan";
import ButtonDelete from "./ButtonDelete";
import ButtonDown from "./ButtonDown";
import ButtonUp from "./ButtonUp";

function QuestionsTable({ data, refetch }) {
  const { projectid } = useParams();

  return (
    <table className="w-full max-w-3xl p-0 mx-auto text-xs bg-black bg-opacity-25 border-2 border-white sm:text-base sm:p-5">
      <thead>
        <tr className="text-purple-500">
          <th className="px-2 py-1 border-2 border-white">#</th>
          <th className="px-2 py-1 border-2 border-white">Campo</th>
          <th className="px-2 py-1 border-2 border-white">Pregunta</th>
          <th className="px-2 py-1 border-2 border-white">tipo</th>
          <th className="px-2 py-1 border-2 border-white">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? (
          data.map((item, key) => (
            <tr key={"fila" + key}>
              <td className="px-2 py-1 text-center border-2 border-white">
                {key + 1}
              </td>
              <td className="px-2 py-1 text-center border-2 border-white">
                {item.name}
              </td>
              <td className="px-2 py-1 text-center border-2 border-white">
                {item.labelText}
              </td>
              <td className="px-2 py-1 text-center border-2 border-white">
                {item.questionType}
              </td>
              <td className="px-2 py-1 text-center border-2 border-white">
                <span className="flex flex-row justify-center w-full text-fuchsia-500">
                  <Link
                    to={`/project/question/edit/${item.questionType}/${item._id}`}
                  >
                    <BsFillPencilFill className="cursor-pointer sm:w-8 sm:px-2" />
                  </Link>
                  {key <= 0 ? null : (
                    <ButtonUp
                      projectid={projectid}
                      order={parseInt(key)}
                      refetch={refetch}
                    />
                  )}
                  {key >= data.length - 1 ? null : (
                    <ButtonDown
                      projectid={projectid}
                      order={parseInt(key)}
                      refetch={refetch}
                    />
                  )}
                  <ButtonDelete
                    projectId={projectid}
                    questionId={item._id}
                    refetch={refetch}
                  />
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>
              <NotificationSpan className="px-2">
                No hay preguntas
              </NotificationSpan>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default QuestionsTable;
