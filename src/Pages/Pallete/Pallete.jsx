import React from "react";
import Button from "../Shared/Components/Button";

const Pallete = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-screen p-20 bg-black">
      <div className="flex flex-col items-center justify-center w-full p-10 bg-purple-900">
        <span className="text-black">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="text-white">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="text-purple-500">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="text-yellow-400">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="text-fuchsia-500">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="">
          <Button className="text-white bg-black border-white" text="Hola" />
          <Button className="text-black bg-white border-white" text="Hola" />
          <Button className="font-bold text-black border-white" text="Hola" />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-10 bg-fuchsia-500">
        <span className="text-black">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="text-white">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="text-purple-500">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="text-yellow-400">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="text-fuchsia-500">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="">
          <Button className="text-white bg-black border-white" text="Hola" />
          <Button className="text-black bg-white border-white" text="Hola" />
          <Button className="font-bold text-black border-white" text="Hola" />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-10 bg-yellow-400">
        <span className="text-black">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="text-white">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="text-purple-500">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="text-yellow-400">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="text-fuchsia-500">
          Hola <span className="font-bold">Hola</span>
        </span>
        <span className="">
          <Button className="text-white bg-black border-white" text="Hola" />
          <Button className="text-black bg-white border-white" text="Hola" />
          <Button className="font-bold text-black border-white" text="Hola" />
        </span>
      </div>
    </div>
  );
};

export default Pallete;
