import React from "react";
import TextScroll from "./TextScroll";
import Mid_Header from "./Mid_Header";
import QuickLink from "./QuickLink";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <TextScroll />
      <Mid_Header />
      <QuickLink />
      <Navbar />
    </div>
  );
}

export default Header;
