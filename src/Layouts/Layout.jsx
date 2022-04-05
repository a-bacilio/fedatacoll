import React from 'react'
import { NavBar } from '../Pages/Shared/NavBar/NavBar'

const Layout = ({children}) => {
  return (
    <div className="box-border flex flex-col justify-start w-full min-h-screen px-2 py-10 text-white bg-black">
      <NavBar/>
        {children}
    </div>
  )
}

export default Layout