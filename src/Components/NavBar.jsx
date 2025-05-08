import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import "./NavBar.css";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

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
      {user && (
        <NavLink className="hover:text-orange-500" to="/faq">
          FAQ
        </NavLink>
      )}
    </div>
  );

  const handelLogOut = () => {
    logOut()
      .then(() => {
        // alert("sign out succesfull");
        toast("Logout successful!");
      })
      .catch((error) => {
        // alert(error);
        toast(`${error}`);
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
        <a className="btn btn-ghost text-2xl font-bold italic">
          <span className=" text-orange-400">Vibe</span>Venue
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="relative group mr-2">
              <img
                className="max-w-[50px] max-h-[50px] rounded-full cursor-pointer"
                src={user.photoURL}
                alt="User Profile"
              />
              <div className="absolute  mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block ">
                {user.displayName}
              </div>
            </div>
            <button
              onClick={handelLogOut}
              className="relative px-2 md:px-3 lg:px-5 py-1 md:py-2 lg:py-3 overflow-hidden font-medium  bg-gray-100 border border-orange-400 rounded-lg shadow-inner group"
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
          </>
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
