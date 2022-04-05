import React from 'react'
import { useDeleteQuestionMutation } from '../../../redux/store/querys/questions-query';
import { BsFillTrashFill } from "react-icons/bs";


function ButtonDelete({ projectId, questionId, refetch }) {
    const [postDeleteQuestion] = useDeleteQuestionMutation();
    const handleClick = async () => {
        await postDeleteQuestion({ projectId, questionId });
        await refetch()
    }
    return <BsFillTrashFill onClick={() => handleClick()} className='cursor-pointer sm:w-8 sm:px-2' />

}

export default ButtonDelete