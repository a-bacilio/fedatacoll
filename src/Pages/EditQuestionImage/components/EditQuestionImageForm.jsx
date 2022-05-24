import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../Shared/Components/Button";
import InputField from "../../Shared/Components/InputField";
import InputLabel from "../../Shared/Components/InputLabel";
import NotificationSpan from "../../Shared/Components/NotificationSpan";
import { useUpdateImageQuestionMutation } from "../../../redux/store/querys/questions-query";
import { useParams } from "react-router-dom";
import { getUpdateWithImageFormData } from "../../Shared/utils/getUpdateWithImageFormData";

function EditQuestionImageForm({ data, refetch }) {
  const { questionid } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [postUpdate, { isSuccess, isError, isLoading, error }] =
    useUpdateImageQuestionMutation();

  const onSubmit = async (formData) => {
    await postUpdate({
      body: await getUpdateWithImageFormData(formData),
      questionid,
    });
    await refetch();
    document.location.href = `/myProjects/${data.project}`;
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center max-w-2xl p-5 mx-auto"
      encType="multipart/form-data"
    >
      <InputLabel htmlFor="name">
        Nombre del Campo:
        <InputField
          props={{ ...register("name", { required: true }) }}
          type="text"
          placeholder={data && data.name}
        />
        {errors.name && (
          <NotificationSpan>Debe colocar tu correo</NotificationSpan>
        )}
      </InputLabel>

      <InputLabel htmlFor="labelText">
        Pregunta:
        <InputField
          props={{ ...register("labelText", { required: true }) }}
          type="text"
          placeholder={data && data.labelText}
        />
        {errors.labelText && (
          <NotificationSpan>Debe colocar la pregunta</NotificationSpan>
        )}
      </InputLabel>

      <InputLabel htmlFor="labelText">
        Imagenconopciones:
        <InputField
          props={{ ...register("image", { required: true }) }}
          type="file"
          placeholder={data && data.labelText}
        />
        {errors.labelText && (
          <NotificationSpan>Debe colocar la imagen a mostrar</NotificationSpan>
        )}
      </InputLabel>

      <button
        className="px-2 py-1 bg-white border-2 border-black rounded-lg"
        type="submit"
      >
        Guardar
      </button>
      {isSuccess && (
        <NotificationSpan className="w-full p-5">
          Ingreso exitoso
        </NotificationSpan>
      )}
      {isLoading && (
        <NotificationSpan className="w-full p-5">Cargando..</NotificationSpan>
      )}
      {isError && (
        <NotificationSpan className="w-full p-5">
          Hubo un error: {error.data.msg}
        </NotificationSpan>
      )}
    </form>
  );
}

export default EditQuestionImageForm;
