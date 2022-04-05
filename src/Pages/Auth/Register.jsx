import React from 'react'
import Card from '../Shared/Components/Card'
import Button from '../Shared/Components/Button'
import RegisterForm from './Components/RegisterForm'
import { Link } from 'react-router-dom'


function Register(){

  return (
    <div className='flex flex-col items-center justify-center p-2 my-auto'>
        <Card className='flex flex-col items-center w-full bg-purple-900 sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-4/12'>
          <span className='w-full p-5 mx-auto font-bold text-center text-white'>
            Registrese en el sistema :)
          </span>
            <RegisterForm/>
            <Link to="/login"><Button variation={1}>Tengo una cuenta</Button></Link>
            <Link to="#"><Button variation={3}>Recuperar Contraseña</Button></Link>
        </Card>
    </div>
  )
}

export default Register