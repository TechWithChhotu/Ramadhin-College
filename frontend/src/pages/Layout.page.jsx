import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function LayoutPage() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutPage;
