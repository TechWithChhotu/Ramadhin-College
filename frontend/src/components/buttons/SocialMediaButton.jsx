import React from "react";
import { Link } from "react-router-dom";

function SocialMediaButton({ text, link = "#", to = "left" }) {
  return (
    <div className="w-10 max-sm:w-8 max-sm:h-8 relative h-10 rounded-full overflow-hidden">
      <Link
        to={link}
        className={`peer text-lg  border-2 absolute top-0 text-indigo-600  border-indigo-600 rounded-full hover:text-white  w-full h-full z-10 flex justify-center items-center duration-500`}
      >
        {text}
      </Link>

      <div
        className={`peer-hover:w-full w-0 left-0 bg-indigo-600 duration-500 h-full  absolute  top-0 z-0 `}
      ></div>
    </div>
  );
}

export default SocialMediaButton;
