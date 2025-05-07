import React from "react";
import errorImg from "../assets/errorPage.jpg";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <img className=" mx-auto  w-2xl" src={errorImg} alt="" />
        <div className="  flex justify-center mt-9">
          <Link to="/">
            <button className="  border  bg-green-500 text-xl font-semibold text-white rounded-2xl px-3 py-1">
              Home
            </button>
          </Link>
        </div>
      </div>
      {/* hello */}
    </div>
  );
};

export default ErrorPage;
