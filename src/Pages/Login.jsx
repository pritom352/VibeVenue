import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        toast("Login successful!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(`${errorMessage}`);
      });
  };
  const handelGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(`${errorMessage}`);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-30">
        <h2 className=" text-3xl font-bold mx-auto  mt-3 text-orange-400  text-shadow-lg ">
          Login <span className=" text-black ">Naw</span>
        </h2>
        <div className="card-body">
          <form onSubmit={handelLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className=" input text-black font-semibold focus:bg-orange-400 focus:text-white w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              required
              name="password"
              autoComplete="new-password"
              className="input text-black font-semibold focus:bg-orange-400 focus:text-white w-full"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn btn-neutral hover:bg-orange-400 hover:border-none hover:font-extrabold mt-4"
            >
              Login
            </button>
          </form>
          <button
            onClick={handelGoogleLogin}
            className=" btn   gap-3 rounded-md  bg-black text-white  font-semibold py-2.5 hover:bg-orange-400 hover:border-none hover:font-bold "
          >
            <FaGoogle size={24} /> Login With Google Login
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
        </div>
      </div>
    </div>
  );
};

export default Login;
