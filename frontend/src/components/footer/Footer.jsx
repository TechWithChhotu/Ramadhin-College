import React from "react";
// import NPTEL from "../../../public/NPTEL.jpg";
import nptel from "../../assets/nptel.jpg";
import swayam from "../../assets/swayam.jpg";
import skill_india from "../../assets/skill_india.jpg";
import rd_college from "../../assets/rd_college.jpg";
import { NavLink } from "react-router-dom";
/*---------------------->>All Icons Improt<<----------------------*/
import {
  MdSettingsPhone,
  MdMarkEmailRead,
  RiTwitterXFill,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  AiOutlineLink,
} from "../ReactIcons";

import { Link } from "react-router-dom";
import SocialMediaButton from "../buttons/SocialMediaButton";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 min-h-[25rem] w-full  text-white flex flex-col justify-between ">
      <div className="w-full grid grid-cols-4 place-items-center max-md:grid-cols-2 m-auto">
        {/*---------------------->>Follow us<<----------------------*/}
        <div>
          <p className=" border-blue-500 border-b w-fit">Follow us</p>
          <ul className=" text-base flex gap-1 my-5">
            <li>
              <SocialMediaButton text={<RiTwitterXFill />} />
            </li>
            <li>
              <SocialMediaButton text={<BiLogoFacebook />} />
            </li>
            <li>
              <SocialMediaButton text={<BiLogoInstagram />} />
            </li>
            <li>
              <SocialMediaButton text={<BiLogoLinkedin />} />
            </li>
          </ul>
          <figure>
            <img
              src={rd_college}
              alt=""
              className="w-[12rem] max-sm:w-[10rem] rounded-md RdCollege"
            />
          </figure>
        </div>

        {/*---------------------->>ContactUs<<----------------------*/}
        <div>
          <p className=" border-blue-500 border-b w-fit">Contact us</p>
          <div className="text-base max-w-[18rem]  my-5 flex flex-col gap-2">
            <p id="phoneNumber" className="flex gap-2">
              <MdSettingsPhone />
              <span> +91-6341-223295</span>
            </p>
            <p id="email" className="flex gap-2">
              <MdMarkEmailRead />
              <Link>enquiry@rdcollege.org</Link>
            </p>
            <div>
              Ramadhin College Sheikhpura College More Sheikhpura - 811105 Bihar
            </div>
            <div className="w-full">
              <iframe
                className="w-full max-sm:w-[11rem]  rounded-md "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.91293877669!2d85.8683188738361!3d25.13863407774868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f241f8485f2bdf%3A0x816ae63ffe629444!2zUi5EIOCkleClieCksuClh-CknA!5e0!3m2!1shi!2sin!4v1695519772941!5m2!1shi!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/*---------------------->>Important Links<<----------------------*/}
        <div>
          <p className=" border-blue-500 border-b w-fit">Important Links</p>
          <ul className="my-5 text-base flex flex-col gap-2">
            <li>
              <NavLink
                to="https://biharboardonline.com/"
                className="flex gap-2"
                target="_blank"
              >
                <AiOutlineLink />
                <span>BSEB, Patna</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.mungeruniversity.ac.in/"
                className="flex gap-2"
                target="_blank"
              >
                <AiOutlineLink />
                <span>Munger University, Munger</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.ugc.gov.in/"
                className="flex gap-2"
                target="_blank"
              >
                <AiOutlineLink />
                <span>University Grants Commission</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://nptel.ac.in/"
                className="flex gap-2"
                target="_blank"
              >
                <AiOutlineLink />
                <span>NPTEL Lectures</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://swayam.gov.in/"
                className="flex gap-2"
                target="_blank"
              >
                <AiOutlineLink />
                <span>Swayam Student Portal</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="flex gap-2" target="_blank">
                <AiOutlineLink />
                <span>Grievance Redressal System</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.pmsonline.bih.nic.in/"
                className="flex gap-2"
                target="_blank"
              >
                <AiOutlineLink />
                <span>Post Matric Scholarship, Bihar</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://scholarships.gov.in"
                className="flex gap-2"
                target="_blank"
              >
                <AiOutlineLink />
                <span>National Scholarship, Bharat</span>
              </NavLink>
            </li>

            {/* https://biharboardonline.com/ */}
          </ul>
        </div>

        {/*---------------------->>E-Learning<<----------------------*/}
        <div>
          <p className=" border-blue-500 border-b w-fit">E-Learning</p>
          <div className="flex flex-col gap-2 my-5">
            <Link>
              <img src={nptel} alt="" className="w-40 h-20  rounded-md" />
            </Link>
            <Link>
              <img src={swayam} alt="" className="w-40 h-20  rounded-md" />
            </Link>
            <Link>
              <img src={skill_india} alt="" className="w-40 h-20  rounded-md" />
            </Link>
          </div>
        </div>
      </div>

      {/*======================>>CopyRight<<======================*/}
      <p className="bg-indigo-700 text-center w-full min-h-[2.5rem] flex justify-center items-center">
        © Copyright {year} Designed & Developed By{" "}
        <span className="max-sm:hidden">|</span> TechWithChhotu@Ckumar.
      </p>
    </footer>
  );
}

export default Footer;
