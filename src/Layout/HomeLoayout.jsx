import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const HomeLoayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="  px-25  bg-amber-100">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLoayout;
