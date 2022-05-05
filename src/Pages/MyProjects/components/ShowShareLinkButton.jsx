import React, { useState } from "react";
import { BsFillShareFill } from "react-icons/bs";
import copy from "copy-to-clipboard";

function ShowShareLinkButton({ className = "", projectId = "" }) {
  const [modal, openModal] = useState(false);
  const [url, setUrl] = useState(
    `${process.env.REACT_APP_HOST}/sharelink/${projectId}`
  );
  const copyToClipboard = () => {
    copy(`${process.env.REACT_APP_HOST}/sharelink/${projectId}`);
    setUrl("Copiado!");
  };
  return (
    <>
      <BsFillShareFill
        className={`${className}`}
        onClick={async () => {
          openModal(true);
        }}
      />
      {modal && (
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-70">
          <div className="relative p-2 font-bold text-black bg-white rounded-lg ">
            Haga clic para copiar: <br />
            <div
              className="absolute z-50 flex flex-col items-center justify-center w-12 h-12 text-xs font-bold text-black rounded-full cursor-pointer bg-fuchsia-400 -top-10 -right-10"
              onClick={() => openModal(false)}
            >
              Cerrar
            </div>
            <button
              type="button"
              onClick={copyToClipboard}
              className="p-1 mx-auto my-auto text-black bg-white border-2 rounded-lg cursor-pointer"
            >
              {url}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowShareLinkButton;
