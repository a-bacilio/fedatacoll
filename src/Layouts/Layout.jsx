import React, { useEffect, useRef, useState } from "react";
import { NavBar } from "../Pages/Shared/NavBar/NavBar";
import bgimage from "../assets/backgroundImage.jpg";

const Layout = ({ children }) => {
  return (
    <div className="box-border flex flex-col justify-start w-full min-h-screen px-2 py-10 text-white bg-black">
      <div className="fixed top-0 left-0 z-0 flex flex-col items-center justify-center w-full h-full bg-black">
        <img
          style={{
            width: "400%",
            height: "400%",
            animationDuration: "500s",
            animationIterationCount: "infinite",
          }}
          src={bgimage}
          alt="backgroundIamge"
          className="opacity-30 animate-spin"
        />
      </div>
      <NavBar />
      <div className="relative">{children}</div>
    </div>
  );
};

export default Layout;
