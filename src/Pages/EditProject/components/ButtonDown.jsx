import React from 'react'
import { usePostQuestionDownMutation } from '../../../redux/store/querys/questions-query';
import { BsFillArrowDownSquareFill } from "react-icons/bs";

function ButtonDown({ projectid, order, refetch }) {
    const [postQuestionDown] = usePostQuestionDownMutation();
    const handleClick = async () => {
        await postQuestionDown({ projectid, order });
        await refetch()
    }
    return <BsFillArrowDownSquareFill onClick={() => handleClick()} className='cursor-pointer sm:w-8 sm:px-2' />

}

export default ButtonDown