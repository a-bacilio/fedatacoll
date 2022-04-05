import React,{useState} from 'react'
import {BsTrashFill} from 'react-icons/bs'
import { useDeleteProjectMutation } from '../../../redux/store/querys/projects-query'
import TitleBox from "../../Shared/Components/TitleBox";
import Button from "../../Shared/Components/Button";



function DeleteProjectButton({className="", projectid,refetch=()=>{}}) {
  const [modal, setModal] = useState(false)
  const [deleteProject] = useDeleteProjectMutation()
  
  return (
    <>
    {modal===true&&<div className='fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-gray-700'>
      <TitleBox>Estas Seguro?{modal}</TitleBox>
      <div>
        <Button onClick={async ()=>{await deleteProject(projectid);await refetch(); setModal(false)}}  >Si</Button>
        <Button onClick={()=>setModal(false)}>No</Button>
      </div>
    </div>
    }
    <BsTrashFill className={className} onClick={()=>setModal(true)}  />
    </>
  )
}

export default DeleteProjectButton