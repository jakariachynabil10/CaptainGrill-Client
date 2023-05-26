import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const FormLayout = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-pink-100 to-pink-300">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default FormLayout;
