import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    // <div className="hero bg-base-200 min-h-screen">
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-30">
      <h2 className=" text-3xl font-bold mx-auto  mt-3 text-orange-400  text-shadow-lg ">
        Login <span className=" text-black ">Naw</span>
      </h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className=" input text-black font-semibold focus:bg-orange-400 focus:text-white"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input text-black font-semibold focus:bg-orange-400 focus:text-white"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral hover:bg-orange-400 hover:border-none hover:font-extrabold mt-4">
            Login
          </button>
          <p className=" mt-1 ">
            Don't have an account ?{" "}
            <Link
              className=" text-blue-500 hover:text-orange-400"
              to="/auth/register"
            >
              Register
            </Link>
          </p>
        </fieldset>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Login;
