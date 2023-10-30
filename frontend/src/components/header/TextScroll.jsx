import React from "react";
import Marquee from "react-fast-marquee";
import { ToastContainer } from "react-toastify";
function TextScroll() {
  return (
    <>
      <ToastContainer />
      <div className=" bg-gray-900 text-white text-xl py-1" id="RD">
        <Marquee>
          <p className="px-80">Welcome to Ramadhin College.</p>
          <p>रामाधीन कॉलेज में आपका स्वागत है|</p>
        </Marquee>
      </div>
    </>
  );
}

export default TextScroll;
