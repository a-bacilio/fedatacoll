import React from 'react'
import LoginForm from './Components/LoginForm'
import {Link} from 'react-router-dom'
import Card from '../Shared/Components/Card'
import Button from '../Shared/Components/Button'


function Login(){

  return (
    <div className='flex flex-col items-center justify-center p-2 my-auto'>
        <Card className='flex flex-col items-center w-full bg-purple-900 sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-4/12'>
          <span className='w-full p-5 mx-auto font-bold text-center text-white'>
            Ingrese al sistema :)
          </span>
            <LoginForm/>
            <Link to="/register"><Button variation={1}>Registrarse</Button></Link>
            <Link to="#"><Button variation={3}>Recuperar Contraseña</Button></Link>
        </Card>
    </div>
  )
}

export default Login