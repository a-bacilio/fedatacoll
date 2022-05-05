import React from "react";

const Button = ({
  className = "",
  children = <></>,
  variation = 0,
  onClick = () => {},
}) => {
  let variation_class = "";
  switch (variation) {
    case 1:
      variation_class = "text-white bg-black border-white";
      break;
    case 2:
      variation_class = "text-black bg-white border-white";
      break;
    case 3:
      variation_class = "font-bold text-black border-white";
      break;

    default:
      variation_class = "";
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`${className} ${variation_class}  py-1 px-2 border-2 rounded-lg m-1 text-center cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
