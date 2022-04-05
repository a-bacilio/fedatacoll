import React from 'react'
import { useForm } from "react-hook-form";
import { usePostLoginUserMutation } from '../../../redux/store/querys/auth-query';
import Button from '../../Shared/Components/Button';
import InputField from '../../Shared/Components/InputField';
import InputLabel from '../../Shared/Components/InputLabel';
import NotificationSpan from '../../Shared/Components/NotificationSpan';
import jsCookie from 'js-cookie';


function LoginForm(){
    const { register, handleSubmit, formState: { errors }  } = useForm  ();
    const [postLoginForm,{isSuccess,isError,isLoading,error}] = usePostLoginUserMutation();
    const onSubmit = async (data) => {
      let response = await postLoginForm(data);
      jsCookie.set("DTCUSERID",response.data.userId)
      jsCookie.set("DTCTOKEN",response.data.token)
      window.location.replace("/myprojects")
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center p-5" >
       
        <InputLabel htmlFor="email">
            Email:
            <InputField props={{...register("email", { required: true })}} type="email"/>
            {errors.email && <NotificationSpan>Debes colocar tu correo</NotificationSpan>}
        </InputLabel>
        
        <InputLabel htmlFor="password">
            Contraseña
            <InputField props={{...register("password", { required: true })}} type="password"/>
            {errors.password && <NotificationSpan>Debes colocar tu contraseña</NotificationSpan>}
        </InputLabel>
        
        
      <Button variation={2} type="submit">Ingresar</Button>
      {isSuccess&&<NotificationSpan className='w-full p-5'>Ingreso exitoso</NotificationSpan>}
      {isLoading&&<NotificationSpan className='w-full p-5'>Cargando..</NotificationSpan>}
      {isError&&<NotificationSpan className='w-full p-5'>Hubo un error: {error.data.msg}</NotificationSpan>}
    </form>
  )
}

export default LoginForm