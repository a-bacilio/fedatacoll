import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Shared/Components/Button";
import NotificationSpan from "../../Shared/Components/NotificationSpan";
import InputField from "../../Shared/Components/InputField";
import InputLabel from "../../Shared/Components/InputLabel";
import { useGetOneProjectQuery } from "../../../redux/store/querys/projects-query";
import { usePostCreateQuestionMutation } from "../../../redux/store/querys/questions-query";

function CreateQuestionForm({ projectid = "", refetch }) {
  const [postCreateQuestion, { isSuccess, isError, isLoading, error }] =
    usePostCreateQuestionMutation();
  const [formData, setFormData] = useState({
    name: "",
    labelText: "",
    questionType: "",
  });
  const handleSubmit = async (data) => {
    if (
      formData.name === "" ||
      formData.labelText === "" ||
      formData.questionType === ""
    ) {
      alert("Complete todos los campos");
    } else {
      await postCreateQuestion({ ...formData, project: projectid });
      setFormData({
        name: "",
        labelText: "",
      });
      await refetch();
    }
  };
  return (
    <tr className="text-xs">
      <td className="px-2 py-1 text-center border-2 border-white">Nuevo</td>
      <td className="px-2 py-1 text-center border-2 border-white">
        <input
          className="px-2 py-1 rounded-lg"
          placeholder="campo"
          name="name"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
      </td>
      <td className="px-2 py-1 text-center border-2 border-white">
        <input
          className="px-2 py-1 rounded-lg"
          placeholder="Texto"
          name="labelText"
          value={formData.labelText}
          onChange={(e) => {
            setFormData({ ...formData, labelText: e.target.value });
          }}
        />
      </td>
      <td className="px-2 py-1 text-center border-2 border-white">
        <select
          className="px-2 py-1 rounded-lg"
          placeholder="Tipo de pregunta"
          name="questionType"
          value={formData.questionType}
          onChange={(e) => {
            setFormData({ ...formData, questionType: e.target.value });
          }}
        >
          <option className="px-2 py-1 rounded-lg" value="number">
            Numérico
          </option>
          <option className="px-2 py-1 rounded-lg" value="text">
            Texto
          </option>
          <option className="px-2 py-1 rounded-lg" value="image">
            Imagen
          </option>
        </select>
      </td>
      <td className="px-2 py-1 text-center border-2 border-white">
        <button
          className="px-2 py-1 font-bold bg-white rounded-lg"
          onClick={handleSubmit}
        >
          Crear
        </button>
      </td>
    </tr>
  );
}

export default CreateQuestionForm;
