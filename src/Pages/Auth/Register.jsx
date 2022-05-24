import React from "react";
import Card from "../Shared/Components/Card";
import Button from "../Shared/Components/Button";
import RegisterForm from "./Components/RegisterForm";
import { Link } from "react-router-dom";
import jsCookie from "js-cookie";
import { NavBarWrapper } from "../Shared/Components/NavBar";
import img_x from "../../assets/3dimages/business-3d-happy-robot-assistant-waving-hello (1).png";

function Register() {
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
          <span className="w-full p-5 mx-auto font-bold text-center text-white">
            Registrese en el sistema :)
          </span>
          <RegisterForm />
          <Link to="/">
            <Button variation={1}>Tengo una cuenta</Button>
          </Link>
        </Card>
        <div className="flex flex-col items-center w-full">
          <img alt="" src={img_x} className="w-7/12" />
        </div>
      </div>
    </div>
  );
}

export default Register;
