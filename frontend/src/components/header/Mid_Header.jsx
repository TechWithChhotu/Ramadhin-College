import React from "react";
import rd_logo from "../../assets/rd_logo.png";
import university_logo from "../../assets/university_logo.png";

import { Link } from "react-router-dom";
function Mid_Header() {
  return (
    <div className="flex justify-around items-center max-sm:flex-col bg-gradient-to-r from-cyan-100 to-cyan-500 py-2">
      {/*---------------------->>rd_logo<<----------------------*/}
      <div>
        <Link to={"/"}>
          <img src={rd_logo} alt="" />
        </Link>
      </div>
      <div className=" text-center font-medium ">
        <h1 className="text-3xl max-sm:text-xl">
          Ramadhin College, Sheikhpura
        </h1>
        <p className="max-sm:text-base">
          (A Constituent Unit of Munger University, Munger)
        </p>
        <p className="max-sm:text-base">
          Ramdhin College, Sheikhpura (Bihar) - 811105
        </p>
      </div>

      {/*---------------------->>mu_logo<<----------------------*/}
      <div>
        <Link to={"/"}>
          <img src={university_logo} alt="" className=" h-24" />
        </Link>
      </div>
    </div>
  );
}

export default Mid_Header;
