import React, { useState } from 'react'
import {FiUserPlus} from"react-icons/fi"
import QRCode from "react-qr-code";
import {usePostColaboratorTokenMutation} from "../../../redux/store/querys/projects-query"

function ShowColaboratorQRButton({className="",projectId=""}) {
const [modal,openModal] = useState(false)
const [postColaboratorToken,{data,isSuccess,isLoading,isError,error}]=usePostColaboratorTokenMutation()
  return (
    <>
        <FiUserPlus className={`${className}`} onClick={async()=>{await postColaboratorToken(projectId);openModal(true)}}/>
        {modal && (
            <div className='fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-70'>
                <div className='absolute flex flex-col items-center justify-center w-12 h-12 text-xs text-black rounded-full cursor-pointer top-4 right-4 bg-fuchsia-400' onClick={()=>openModal(false)}>
                    Cerrar
                </div>
                <div className='p-10 bg-white'>
                    <QRCode value={isSuccess&&data?.colaboratorToken} className="mx-auto my-auto"/>
                    {isLoading&&<span>Esta cargando</span>}
                    {isError&&<span className='text-red-500'>Error: {error.msg}</span>}
                </div>
            </div>
            )
        }
    </>
  )
}

export default ShowColaboratorQRButton