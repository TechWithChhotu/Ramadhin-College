import React from "react";

function Button({ info, style }) {
  return (
    <div
      className={`bg-indigo-600 text-gray-100 min-w-[150px] text-center hover:bg-indigo-500 duration-300 ${style}`}
    >
      {info.text}{" "}
    </div>
  );
}

export default Button;
