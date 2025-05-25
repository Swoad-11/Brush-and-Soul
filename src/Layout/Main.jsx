import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Shared/Footer/Footer";
import Navbar from "../pages/Home/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
