import React from "react";
import LoginForm from "./Components/LoginForm";
import { Link } from "react-router-dom";
import Card from "../Shared/Components/Card";
import Button from "../Shared/Components/Button";
import jsCookie from "js-cookie";
import logo from "../../assets/logo.png";

function Login() {
  const loggedIn =
    `${jsCookie.get("DTCTOKEN")}` !== "undefined" &&
    `${jsCookie.get("DTCUSERID")}` !== "undefined" &&
    `${jsCookie.get("DTCTOKEN")}` !== "" &&
    `${jsCookie.get("DTCUSERID")}` !== "";

  if (loggedIn) {
    window.location.replace("/myprojects");
  }

  return (
    <div className="flex flex-col items-center justify-center p-2 my-auto">
      <Card className="flex flex-col items-center w-full p-8 bg-purple-900 sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-4/12">
        <span className="w-full p-5 mx-auto font-bold text-center text-white">
          <h1 className="w-full text-2xl font-bold text-center">
            Bienvenido a
          </h1>
          <img src={logo} alt="logo" />
        </span>
        <LoginForm />
        <Link to="/register">
          <Button variation={1}>Registrarse</Button>
        </Link>
      </Card>
    </div>
  );
}

export default Login;
