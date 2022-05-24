import React from "react";
import { useForm } from "react-hook-form";
import { usePostLoginUserMutation } from "../../../redux/store/querys/auth-query";
import Button from "../../Shared/Components/Button";
import InputField from "../../Shared/Components/InputField";
import InputLabel from "../../Shared/Components/InputLabel";
import NotificationSpan from "../../Shared/Components/NotificationSpan";
import { useDispatch } from "react-redux";
import { storeUserToken } from "../../../redux/slices/auth/authSlice";
import { useSelector } from "react-redux";
import { tokenSelector } from "../../../redux/slices/auth/authSelectors";
import { Navigate } from "react-router-dom";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [postLoginForm, { isSuccess, isError, isLoading, error }] =
    usePostLoginUserMutation();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    const response = await postLoginForm(data);
    dispatch(storeUserToken(response));
  };
  return (
    <>
      {!useSelector(tokenSelector) ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center p-5"
        >
          <InputLabel htmlFor="email">
            Email:
            <InputField
              props={{ ...register("email", { required: true }) }}
              type="email"
            />
            {errors.email && (
              <NotificationSpan>Debes colocar tu correo</NotificationSpan>
            )}
          </InputLabel>

          <InputLabel htmlFor="password">
            Contraseña
            <InputField
              props={{ ...register("password", { required: true }) }}
              type="password"
            />
            {errors.password && (
              <NotificationSpan>Debes colocar tu contraseña</NotificationSpan>
            )}
          </InputLabel>

          <Button variation={2} type="submit">
            Ingresar
          </Button>
          {isSuccess && (
            <NotificationSpan className="w-full p-5">
              Ingreso exitoso
            </NotificationSpan>
          )}
          {isLoading && (
            <NotificationSpan className="w-full p-5">
              Cargando..
            </NotificationSpan>
          )}
          {isError && (
            <NotificationSpan className="w-full p-5">
              Hubo un error: {error.data.msg}
            </NotificationSpan>
          )}
        </form>
      ) : (
        <Navigate to="/myprojects" />
      )}
    </>
  );
}

export default LoginForm;
