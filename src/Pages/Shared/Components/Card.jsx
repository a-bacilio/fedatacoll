import React from 'react'

const  Card = ({className="",children=<></>}) => {
  return (
    <div className={`${className} p-2 mx-auto border-2 rounded-xl`}>{children}</div>
  )
}

export default Card