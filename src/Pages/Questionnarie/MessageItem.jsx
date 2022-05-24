import React from "react";
import avatar_img from "../../assets/3dimages/business-3d-friendly-robot-assistant-waving.png";

function MessageItem({ agent = false, children, big = false }) {
  return (
    <div className="flex flex-col w-full">
      <div
        className={`flex flex-row items-center ${
          agent ? "justify-end" : "justify-start"
        } w-full mb-2`}
      >
        <div
          className={`w-11/12 px-2 py-1 ${
            big ? "text-3xl" : "text-xl"
          } font-bold text-center text-white bg-black rounded-lg `}
        >
          {children}{" "}
        </div>
      </div>

      <div
        className={`flex flex-row ${
          agent ? "justify-end" : "justify-start"
        } w-full mb-5 `}
      >
        <img
          style={{ transform: `${agent ? "" : "scaleX(-1)"}` }}
          className="h-16"
          src={avatar_img}
          alt=""
        />
      </div>
    </div>
  );
}

export default MessageItem;
