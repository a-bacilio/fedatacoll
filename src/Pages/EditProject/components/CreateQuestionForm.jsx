import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../../Shared/Components/Button';
import NotificationSpan from '../../Shared/Components/NotificationSpan';
import InputField from '../../Shared/Components/InputField';
import InputLabel from '../../Shared/Components/InputLabel';
import { useGetOneProjectQuery} from '../../../redux/store/querys/projects-query';
import { usePostCreateQuestionMutation } from '../../../redux/store/querys/questions-query';


function CreateQuestionForm({ projectid = "" }) {
  const {refetch} = useGetOneProjectQuery({projectid});
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [postCreateQuestion, { isSuccess, isError, isLoading, error }] = usePostCreateQuestionMutation();
  const onSubmit = async data => {
    await postCreateQuestion({ ...data, project: projectid });
    reset();
    await refetch();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center p-5" >
      <InputLabel htmlFor="name">
        Nombre del Campo:<br/>
        (TodoSeJuntara, solo letras)
        <InputField props={{ ...register("name", { required: true }) }} type="string" />
        {errors.name && <NotificationSpan>Debes colocar un nombre al campo</NotificationSpan>}
      </InputLabel>
      <InputLabel htmlFor="labelText">
        La pregunta:
        <InputField props={{ ...register("labelText", { required: true }) }} type="string" />
        {errors.labelText && <NotificationSpan>Debes colocar una pregunta</NotificationSpan>}
      </InputLabel>
      <InputLabel htmlFor="questionType">
        La pregunta:
        <select className='p-2 font-bold text-purple-900' {...register("questionType", { required: true })} >
          <option value="text">Textual</option>
          <option value="number">Numérico</option>
          <option value="image">Imágenes</option>
        </select>
        {errors.questionType && <NotificationSpan>Debes seleccionar un tipo</NotificationSpan>}
      </InputLabel>



      <Button variation={2} type="submit">Crear Pregunta</Button>
      {isSuccess && <NotificationSpan>Creacion exitosa</NotificationSpan>}
      {isLoading && <NotificationSpan>Cargando..</NotificationSpan>}
      {isError && <NotificationSpan>Hubo un error: {error.data.msg}</NotificationSpan>}
    </form>
  )
}

export default CreateQuestionForm