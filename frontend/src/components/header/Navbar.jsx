import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  AiFillHome,
  MdOutlineSupportAgent,
  BiSolidBookHeart,
  FaBuysellads,
  BsDatabaseFillAdd,
  MdContactEmergency,
  FaPeopleGroup,
  AiOutlineLogout,
  MdNotificationsNone,
  CgProfile,
} from "../ReactIcons";

/*---------------------->>OurNavData<<----------------------*/

const NavData = [
  /*---------------------->>Hove<<----------------------*/
  {
    id: 1,
    path: "/",
    text: "Home",
    Icon: <AiFillHome />,
    childwidth: null,
  },
  /*---------------------->>About<<----------------------*/
  {
    id: 2,
    path: "/about",
    text: "About Us",
    Icon: <FaBuysellads />,
    childwidth: "group-hover:h-[8rem]",
    subNavData: [
      {
        id: 1,
        path: "/about",
        text: "About College",
        childwidth: null,
      },
      {
        id: 2,
        path: "/about",
        text: "About University",
        childwidth: null,
      },
      {
        id: 3,
        path: "/about",
        text: "Vision & Mission",
        childwidth: null,
      },
    ],
  },
  /*---------------------->>Support<<----------------------*/
  {
    id: 3,
    path: "/support",
    text: "Support",
    Icon: <MdOutlineSupportAgent />,
    childwidth: "group-hover:h-[2.7rem]",
    subNavData: [
      {
        id: 1,
        path: "/support/rules_regulation",
        text: "Rules & Regulations",
        childwidth: null,
      },
    ],
  },
  /*---------------------->>Courses<<----------------------*/
  {
    id: 4,
    path: "/courses",
    text: "Courses",
    Icon: <BiSolidBookHeart />,
    childwidth: "group-hover:h-[11rem]",
    subNavData: [
      {
        id: 1,
        path: "/",
        text: "BA / BSC / BCOM",
        childwidth: null,
      },
      {
        id: 2,
        path: "/about",
        text: "BCA / BBA",
        childwidth: null,
      },
      {
        id: 3,
        path: "/about",
        text: "IA / ISC",
        childwidth: null,
      },
      {
        id: 4,
        path: "/about",
        text: "MA / MSC",
        childwidth: null,
      },
    ],
  },
  /*---------------------->>Admission<<----------------------*/
  {
    id: 5,
    path: "/",
    text: "Admission",
    Icon: <BsDatabaseFillAdd />,
    childwidth: "group-hover:h-[8rem]",
    subNavData: [
      {
        id: 1,
        path: "/auth/student/admission",
        text: "Online Admission",
        childwidth: null,
      },
      {
        id: 2,
        path: "/about",
        text: "Offline Admission",
        childwidth: null,
      },
      {
        id: 3,
        path: "/about",
        text: "admission records",
        childwidth: null,
      },
    ],
  },
  /*---------------------->>Fuculty<<----------------------*/
  {
    id: 6,
    path: "/",
    text: "Faculty",
    Icon: <FaPeopleGroup />,
    childwidth: "group-hover:h-[5.5rem]",
    subNavData: [
      {
        id: 1,
        path: "/",
        text: "Teaching-Staff",
        childwidth: null,
      },
      {
        id: 2,
        path: "/about",
        text: "Non Teaching-Staff",
        childwidth: null,
      },
    ],
  },
  /*---------------------->>Contact<<----------------------*/
  {
    id: 7,
    path: "/about",
    text: "Contact Us",
    Icon: <MdContactEmergency />,
    childwidth: "group-hover:h-[8rem]",
    subNavData: [
      {
        id: 1,
        path: "/about",
        text: "Contact",
        childwidth: null,
      },
      {
        id: 2,
        path: "/about",
        text: "Query",
        childwidth: null,
      },
      {
        id: 3,
        path: "/about",
        text: "Complain",
        childwidth: null,
      },
    ],
  },
  /*---------------------->>Admission for ADMIN<<----------------------*/
  {
    id: 8,
    path: "/admin/admission",
    text: "Admission*",
    Icon: <MdContactEmergency />,
    childwidth: "group-hover:h-[8rem]",
    subNavData: [
      {
        id: 1,
        path: "auth/admin?courses=UG",
        text: "UG",
        childwidth: null,
      },
      {
        id: 2,
        path: "auth/admin?courses=PG",
        text: "PG",
        childwidth: null,
      },
      {
        id: 3,
        path: "auth/admin?courses=SeniorSecondry",
        text: "10th+2",
        childwidth: null,
      },
    ],
  },
];

function Navbar() {
  const isLogin = useSelector((state) => state.login);
  const userData = useSelector((state) => state.data);

  /*---------------------->>logout handler<<----------------------*/
  const onLogout = async () => {
    alert("Logout");
  };

  {
    /*---------------------->>NavStateVariable<<----------------------*/
  }
  const [isnavOpne, setIsnavOpne] = useState(false);

  // console.log("userData.role ==> ", userData.role);
  return (
    <div>
      <section className=" bg-red-500 max-sm:py-2 relative">
        <nav className="navbar flex  ">
          <ul className=" h-full leading-10 w-full flex max-sm:flex-col justify-around text-white font-medium">
            {/*---------------------->>Navbar<<----------------------*/}
            <li className="sm:hidden" onClick={() => setIsnavOpne(!isnavOpne)}>
              {isnavOpne ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </li>
            {NavData.map((e) => (
              <li className="group " key={e.id}>
                <div
                  className={`flex items-center ${
                    e.id === 1 ? "cursor-pointer" : "cursor-context-menu"
                  } ${
                    isnavOpne ? "max-sm:visible" : "max-sm:hidden"
                  } duration-1000`}
                >
                  {e.id === 1 ? (
                    <Link
                      to={e.path}
                      className="flex justify-center items-center"
                    >
                      {e.Icon}&nbsp;{e.text}
                    </Link>
                  ) : (
                    <>
                      {e.Icon}&nbsp;{e.text}
                    </>
                  )}
                </div>

                {/*---------------------->>Sub Navbar<<----------------------*/}
                {e.childwidth && (
                  <ul
                    className={` absolute max-sm:left-24 max-sm:-mt-7 max-sm:rounded-md h-0 z-10 duration-1000 overflow-hidden w-56 bg-indigo-600  ${e.childwidth} group-hover:pt-1 ul>li:bg-red-500 divide-y-2 divide-green-500 text-white rounded-b-lg`}
                  >
                    {e.subNavData.map((ee) => (
                      <li className="hover:bg-indigo-500" key={ee.id}>
                        &nbsp;&nbsp; <Link to={ee.path}>{ee.text}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/*======================>>Login/Logout<<======================*/}
          <div className="profile w-[20%] max-sm:absolute max-sm:top-0 max-sm:right-10  flex justify-center items-center">
            <div className="flex justify-center items-center  ">
              {isLogin ? (
                <button>
                  <div className="group h-full leading-10">
                    <img
                      src={userData.avatar.secure_url || userData.Avatar}
                      alt="Avatar"
                      className=" h-10 border-2 border-indigo-600  rounded-full "
                    />
                    <ul
                      className={` absolute right-1  h-0 z-10 duration-1000 overflow-hidden w-40 bg-indigo-600 group-hover:h-[8rem] group-hover:pt-1 text-start   divide-y-2 divide-green-500 text-white rounded-b-lg  max-sm:rounded-md `}
                    >
                      <li className="hover:bg-indigo-500">
                        <Link to={`/auth/student/profile`}>
                          &nbsp;&nbsp; <CgProfile className="inline" /> Your
                          Profile
                        </Link>
                      </li>
                      <li className="hover:bg-indigo-500 " onClick={onLogout}>
                        &nbsp;&nbsp; <AiOutlineLogout className=" inline" />{" "}
                        logout
                      </li>
                      <li className="hover:bg-indigo-500">
                        &nbsp;&nbsp; <MdNotificationsNone className=" inline" />
                        Notification
                      </li>
                    </ul>
                  </div>
                </button>
              ) : (
                <Link
                  to={`/auth/login`}
                  className="outline outline-1 flex justify-center items-center h-8 outline-white text-white hover:bg-indigo-500 duration-500 bg-indigo-600 w-20 rounded"
                >
                  <button>Login</button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
