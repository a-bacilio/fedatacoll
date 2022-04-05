import React from 'react'
import { toast } from 'react-toastify';
function ErrorToast({error}) {
    toast.error(error.data.msg,{
        toastId: "ErrorToast"
    })
  return <></>
}

export default ErrorToast