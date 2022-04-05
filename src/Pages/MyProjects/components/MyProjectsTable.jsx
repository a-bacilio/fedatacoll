import React from 'react'

import {BsFillPencilFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import DeleteProjectButton from './DeleteProjectButton';
import ShowColaboratorQRButton from './ShowColaboratorQRButton';


function MyProjectsTable ({data,refetch}){

  return (
    <table className='w-full max-w-3xl p-0 mx-auto text-xs border-2 border-white sm:text-base sm:p-5'>
        <thead>
          <tr className='text-purple-900'>
            <th className='px-2 py-1 border-2 border-white'>#</th>
            <th className='px-2 py-1 border-2 border-white'>Nombre</th>
            <th className='px-2 py-1 border-2 border-white'>Cantidad de preguntas</th>
            <th className='px-2 py-1 border-2 border-white'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,key) => (
          <tr key={"fila"+key}>
            <td className='px-2 py-1 text-center border-2 border-white' >{key+1}</td>
            <td className='px-2 py-1 text-center border-2 border-white' >{item.name}</td>
            <td className='px-2 py-1 text-center border-2 border-white' >{item.questions.length}</td>
            <td className='px-2 py-1 text-center border-2 border-white' >
              <span className='flex flex-row justify-center w-full text-fuchsia-500'>
                <Link to={`/myProjects/${item._id}`}><BsFillPencilFill className='cursor-pointer sm:w-8 sm:px-2'/></Link>
                <DeleteProjectButton projectid={item._id} refetch={refetch} />
                <ShowColaboratorQRButton className='cursor-pointer sm:w-8 sm:px-2' projectId={item._id}/>
              </span>
            </td>
          </tr> 
          )
          )}
        </tbody>
      </table>
  )
}

export default MyProjectsTable