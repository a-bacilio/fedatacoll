import React, {useState} from 'react'
import Button from "../Components/Button"
import {Link} from 'react-router-dom'
import jsCookie from "js-cookie"

export const NavBar = () => {
    const [open, setOpen] = useState(false)

    const loggedIn = jsCookie.get("DTCTOKEN")!==""&&jsCookie.get("DTCUSERID")!=="";

    const logout = () => {
      jsCookie.set("DTCTOKEN","");
      jsCookie.set("DTCUSERID","");
      setOpen(false);
      window.location.replace("/login");
    } 

  return (
    <>
    <div style={{left:`${open?"0":"-100%"}`}} className='fixed top-0 flex flex-col items-center justify-center w-full h-full min-w-full min-h-screen transition-all bg-purple-900'>
      {!loggedIn&&<Link onClick={()=>setOpen(false)} to="/login"><Button variation={1}>Ingresar</Button> </Link>}
      {!loggedIn&&<Link onClick={()=>setOpen(false)} to="/register"><Button variation={1}>Registrarse</Button></Link>}
      {loggedIn&&<Link onClick={()=>setOpen(false)} to="/myProjects"><Button variation={1}>Mis proyectos</Button></Link>}
      {loggedIn&&<Button onClick={()=>logout()} variation={1}>Salir</Button>}
    </div>
    <div onClick={()=>setOpen(!open)} className='fixed flex flex-col items-center justify-center w-12 h-12 text-xs font-bold text-purple-900 bg-red-300 rounded-full cursor-pointer right-4 top-4'>
        {open?"Cerrar":"Menu"}
    </div>
    </>
  )
}

