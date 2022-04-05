import React from 'react'
import { useForm } from "react-hook-form";
import { usePostCreateProjectMutation, useGetMyProjectsQuery} from '../../../redux/store/querys/projects-query';
import Button from '../../Shared/Components/Button';
import InputField from '../../Shared/Components/InputField';
import InputLabel from '../../Shared/Components/InputLabel';
import NotificationSpan from '../../Shared/Components/NotificationSpan';



function CreateProjectForm(){
    const { register, handleSubmit, formState: { errors }, reset  } = useForm();
    const {refetch} = useGetMyProjectsQuery()
    const [postCreateProject,{isSuccess,isError,isLoading,error}] = usePostCreateProjectMutation();
    const onSubmit = async (data) => {
      await postCreateProject(data);
      reset()
      refetch();
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center p-3" >
       
      <InputLabel htmlFor="name">
          Nombre del proyecto:
          <InputField props={{...register("name", { required: true })}} type="string"/>
          {errors.name && <NotificationSpan>Debe colocar le un nombre al proyecto</NotificationSpan>}
      </InputLabel>
      
      <Button variation={2} type="submit">Crear proyecto</Button>
      {isSuccess&&<NotificationSpan className='w-full p-5'>Creacion exitosa</NotificationSpan>}
      {isLoading&&<NotificationSpan className='w-full p-5'>Cargando..</NotificationSpan>}
      {isError&&<NotificationSpan className='w-full p-5'>Hubo un error: {error.data.msg}</NotificationSpan>}
    </form>
  )
}

export default CreateProjectForm