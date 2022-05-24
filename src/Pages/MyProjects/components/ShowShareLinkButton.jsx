import React, { useState } from "react";
import { BsFillShareFill } from "react-icons/bs";
import copy from "copy-to-clipboard";

function ShowShareLinkButton({
  className = "",
  projectId = "",
  setmodal = () => {},
}) {
  const [url, setUrl] = useState(
    `${process.env.REACT_APP_HOST}/sharelink/${projectId}`
  );
  const copyToClipboard = () => {
    copy(`${process.env.REACT_APP_HOST}/sharelink/${projectId}`);
    setUrl("Copiado!");
  };
  return (
    <BsFillShareFill
      className={`${className}`}
      onClick={async () => {
        setmodal(
          <div className="flex flex-row items-center w-full px-2 py-1 text-xs font-bold text-black bg-white rounded-lg ">
            Haga clic para copiar:
            <button
              type="button"
              onClick={copyToClipboard}
              className="mx-auto my-auto text-black bg-white border-2 rounded-lg cursor-pointer "
            >
              {url}
            </button>
            <div
              className="flex flex-col items-center justify-center px-2 text-xs font-bold text-black text-white bg-red-400 rounded-full cursor-pointer"
              onClick={() => setmodal(null)}
            >
              x
            </div>
          </div>
        );
      }}
    />
  );
}

export default ShowShareLinkButton;
