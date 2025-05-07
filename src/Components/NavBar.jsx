import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import "./NavBar.css";
import { AuthContext } from "../Provider/AuthContext";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <div className="flex gap-4 ">
      <NavLink className="hover:text-orange-500" to="/">
        Home
      </NavLink>{" "}
      <NavLink className="hover:text-orange-500" to="/myProfile">
        My Profile
      </NavLink>
    </div>
  );

  const handelLogOut = () => {
    logOut()
      .then(() => {
        alert("sign out succesfull");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Jasmine</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* <button onClick={handelLogOut} className="btn">
          Log Out
        </button> */}
        {user ? (
          <button
            onClick={handelLogOut}
            className="relative px-5 py-3 overflow-hidden font-medium  bg-gray-100 border border-orange-400 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-400 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-400 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-400 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-400 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-400 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Log Out
            </span>
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="relative px-5 py-3 overflow-hidden font-medium  bg-gray-100 border border-orange-400 rounded-lg shadow-inner group "
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-400 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-400 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-400 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-400 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-400 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Log In
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
