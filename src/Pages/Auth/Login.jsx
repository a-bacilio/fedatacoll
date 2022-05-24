import React from "react";
import LoginForm from "./Components/LoginForm";
import { Link } from "react-router-dom";
import Card from "../Shared/Components/Card";
import Button from "../Shared/Components/Button";
import jsCookie from "js-cookie";
import logo from "../../assets/logo.png";
import img_x from "../../assets/3dimages/business-3d-happy-robot-assistant-waving-hello (1).png";
import { NavBarWrapper } from "../Shared/Components/NavBar";

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
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-stone-800 ">
      <NavBarWrapper />
      <div className="grid items-center justify-center grid-cols-1 gap-6 p-10 my-auto sm:grid-cols-2">
        <Card className="flex flex-col items-center w-full p-10 bg-stone-400">
          <span className="flex flex-col items-center w-full p-5 mx-auto font-bold text-center text-white">
            <h1 className="w-full text-2xl font-bold text-center">
              Bienvenido a
            </h1>
            <br />
            <img src={logo} alt="logo" className="h-16" />
          </span>
          <LoginForm />
          <Link to="/register">
            <Button variation={1}>Registrarse</Button>
          </Link>
        </Card>
        <div className="flex flex-col items-center w-full">
          <img alt="" src={img_x} className="w-7/12" />
        </div>
      </div>
    </div>
  );
}

export default Login;
