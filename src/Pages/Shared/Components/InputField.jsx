import React from 'react'

const InputField = ({props, placeholder="", type=""}) => {
  return (
    <input {...props} type={type} placeholder={placeholder} className="w-full px-4 py-1 font-bold text-purple-900 rounded-lg"/>
  )
}

export default InputField