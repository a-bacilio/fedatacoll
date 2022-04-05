import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetOneProjectQuery } from '../../redux/store/querys/projects-query'
import NotificationSpan from '../Shared/Components/NotificationSpan'
import TitleBox from '../Shared/Components/TitleBox'
import QuestionsTable from './components/QuestionsTable'
import { MdAssignmentReturn } from "react-icons/md"
import { Link } from 'react-router-dom'
import Card from "../../Pages/Shared/Components/Card"
import CreateQuestionForm from './components/CreateQuestionForm'

function EditProject() {
  const { projectid } = useParams()
  const { data, isSuccess, isLoading, isError, error, refetch } = useGetOneProjectQuery({ projectid })
  return (<>
    <TitleBox className="mb-5 text-2xl">
      <Link to="/myProjects">
        <MdAssignmentReturn className='inline text-fuchsia-500' />
      </Link>
      Estas editando: {(data && data.name) || "..."}
    </TitleBox>
    <Card className='max-w-2xl mb-5'>
    <CreateQuestionForm projectid={projectid}/>
    </Card>
    {isSuccess && <QuestionsTable data={(data && data.questions) || []} refetch={refetch} />}
    {isLoading && <NotificationSpan className='w-full p-5'>Cargando..</NotificationSpan>}
    {isError && <NotificationSpan className='w-full p-5'>Hubo un error: {error.data.msg}</NotificationSpan>}
  </>
  )
}

export default EditProject