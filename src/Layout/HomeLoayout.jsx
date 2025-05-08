import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const HomeLoayout = () => {
  return (
    <div>
      {/* {import.meta.env.VITE_SOME_KEY} */}

      <NavBar></NavBar>
      <div className=" px-10 md:px-15 lg:px-25 min-h-[calc(100vh-350px)]  ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLoayout;
