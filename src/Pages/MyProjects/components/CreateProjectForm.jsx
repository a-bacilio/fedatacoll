import React from "react";
import { useForm } from "react-hook-form";
import {
  usePostCreateProjectMutation,
  useGetMyProjectsQuery,
} from "../../../redux/store/querys/projects-query";
import InputField from "../../Shared/Components/InputField";

function CreateProjectForm({ refetch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [postCreateProject, { isError, isLoading }] =
    usePostCreateProjectMutation();
  const onSubmit = async (data) => {
    await postCreateProject(data);
    reset();
    refetch();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
      <InputField
        placeholder="proyecto genial!"
        props={{ ...register("name", { required: true }) }}
        type="string"
      />
      <button
        className="px-2 py-1 mx-2 text-white rounded-lg bg-slate-900 border-lg"
        type="submit"
      >
        {!isLoading && "Crear"} {isLoading && "Cargando"}{" "}
        {isError && errors.name && "nombre?"}
      </button>
    </form>
  );
}

export default CreateProjectForm;
