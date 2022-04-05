import React from 'react'

function TitleBox({children, className}) {
  return  <h1 className={`${className} w-full mx-auto font-bold text-center`}>{children}</h1>
}

export default TitleBox