import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Button from "../buttons/Buttons";

const quickLinkContent = [
  { id: 1, text: "Bonafide", path: "/auth/student/bonafide" },
  { id: 2, text: "CLC", path: "/auth/student/clc" },
  { id: 3, text: "Admission :: UG", path: "/auth/student/admission" },
  { id: 4, text: "Admission :: PG", path: "/auth/student/admission" },
];
function QuickLink() {
  return (
    <div className=" bg-gray-900 text-white text-xl py-1">
      <Marquee direction="right" pauseOnHover>
        {quickLinkContent.map((e) => (
          <Link to={e.path} key={e.id} className="">
            <Button info={e} style={"mx-10 max-sm:mx-5 px-2 py-1 rounded "} />
          </Link>
        ))}
      </Marquee>
    </div>
  );
}

export default QuickLink;
