import React from 'react'
import { usePostQuestionUpMutation } from '../../../redux/store/querys/questions-query';
import { BsFillArrowUpSquareFill } from "react-icons/bs";


function ButtonUp({ projectid, order, refetch }) {
    const [postQuestionUp] = usePostQuestionUpMutation();
    const handleClick = async () => {
        await postQuestionUp({ projectid, order });
        await refetch()
    }
    return <BsFillArrowUpSquareFill onClick={() => handleClick()} className='cursor-pointer sm:w-8 sm:px-2' />

}

export default ButtonUp