import React from "react";
import { useForm } from "react-hook-form";
import { usePostRegisterUserMutation } from "../../../redux/store/querys/auth-query";
import Button from "../../Shared/Components/Button";
import NotificationSpan from "../../Shared/Components/NotificationSpan";
import InputField from "../../Shared/Components/InputField";
import InputLabel from "../../Shared/Components/InputLabel";
function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [postRegisterUser, { isSuccess, isError, isLoading, error }] =
    usePostRegisterUserMutation();
  const onSubmit = async (data) => {
    await postRegisterUser(data);
    await reset();
    window.location.replace("/");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center p-5"
    >
      <InputLabel htmlFor="name">
        Nombre:
        <InputField
          props={{ ...register("name", { required: true }) }}
          type="string"
        />
        {errors.name && (
          <NotificationSpan>Debes colocar tu nombre</NotificationSpan>
        )}
      </InputLabel>

      <InputLabel htmlFor="email">
        Email:
        <InputField
          props={{ ...register("email", { required: true }) }}
          type="email"
        />
        {errors.email && (
          <NotificationSpan>Debe colocar tu correo</NotificationSpan>
        )}
      </InputLabel>

      <InputLabel htmlFor="password">
        Contraseña
        <InputField
          props={{ ...register("password", { required: true }) }}
          type="password"
        />
        {errors.password && (
          <NotificationSpan>Debe colocar tu contraseña</NotificationSpan>
        )}
      </InputLabel>

      <InputLabel htmlFor="passwordConfirmation">
        Confirme su contraseña
        <InputField
          type="password"
          props={{ ...register("passwordConfirmation", { required: true }) }}
        />
        {errors.passwordConfirmation && (
          <NotificationSpan>Debe colocar su contraseña</NotificationSpan>
        )}
      </InputLabel>

      <Button variation={2} type="submit">
        Registrese
      </Button>
      {isSuccess && <NotificationSpan>Registro exitoso</NotificationSpan>}
      {isLoading && <NotificationSpan>Cargando..</NotificationSpan>}
      {isError && (
        <NotificationSpan>Hubo un error: {error.data.msg}</NotificationSpan>
      )}
    </form>
  );
}

export default RegisterForm;
