import React from 'react'
import MyProjectsTable from './components/MyProjectsTable'
import Card from "../Shared/Components/Card"
import CreateProjectForm from './components/CreateProjectForm'
import TitleBox from '../Shared/Components/TitleBox'
import { useGetMyProjectsQuery } from '../../redux/store/querys/projects-query';
import NotificationSpan from '../Shared/Components/NotificationSpan'


function MyProjects() {
  const { data, isSuccess, isError, isLoading, error, refetch } = useGetMyProjectsQuery();
  return (
    <div className='w-full p-2 text-white'>
      <TitleBox className='mb-10 text-2xl font-bold'>
        Mis proyectos 
      </TitleBox>
      <Card className='max-w-2xl mb-5'>
        <TitleBox className="text-xl">Crear Proyecto</TitleBox>
        <CreateProjectForm/>
      </Card>
      <div className='flex flex-col items-center justify-center w-full'>
      {isLoading && <NotificationSpan className="w-full mx-auto text-center">Cargando...</NotificationSpan>}
      {isError && <NotificationSpan className="w-full mx-auto text-center">Error: {error.data.msg}</NotificationSpan>}
      {isSuccess && data.length > 0 
      ? <MyProjectsTable data={data||[]} refetch={refetch}/>
      : <NotificationSpan>No tienes proyectos, puedes crear uno</NotificationSpan>
      }
      </div>
      
    </div>
  )
}

export default MyProjects