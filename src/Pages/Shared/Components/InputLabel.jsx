import React from 'react'

const InputLabel = ({children, onClick, className}) => {
  return (
    <label onClick={onClick} className={`${className} flex flex-col w-full p-2 font-bold text-white`} >
            {children}
    </label>
  )
}

export default InputLabel