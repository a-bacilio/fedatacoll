import React from "react";
import { useDispatch } from "react-redux";
import { removeUserToken } from "../../../redux/slices/auth/authSlice";
import logoimg from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export function NavBarWrapper({ children }) {
  return (
    <div className="flex flex-row items-center justify-between w-full h-12 px-10 text-white bg-black ">
      <Link to="/">
        <img src={logoimg} alt="" className="h-6" />
      </Link>
      <div>{children}</div>
    </div>
  );
}

function NavBar({ children }) {
  const dispatch = useDispatch();
  return (
    <NavBarWrapper>
      <span>{children}</span>
      <button
        className="px-2 py-1 ml-5 text-white bg-red-500 rounded-lg"
        onClick={() => {
          dispatch(removeUserToken());
        }}
      >
        Salir
      </button>
    </NavBarWrapper>
  );
}

export default NavBar;
