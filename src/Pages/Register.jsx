import React, { useContext, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const { register, googleLogin, profileUpdate, setUser } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;
    const password = e.target.currentPassword.value;
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (passwordRegExp.test(password) === false) {
      toast(
        "Password must be at least Six characters includeing  one upper and lower case."
      );
      return;
    }
    register(email, password)
      .then((result) => {
        const user = result.user;

        profileUpdate({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            toast(error);
            setUser(user);
          });

        toast("Register successful!");
        navigate(location?.state || "/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(`${errorMessage}`);
        // ..
      });
  };
  const handelGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast("Logout successful!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast(`${error}`);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20">
        <h2 className=" text-3xl font-bold mx-auto  mt-3 text-orange-400  text-shadow-lg ">
          Register <span className=" text-black ">Now</span>
        </h2>
        <div className="card-body">
          <form onSubmit={handelRegister} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              required
              name="name"
              className=" input text-black font-semibold focus:bg-orange-400 focus:text-white w-full"
              placeholder="Name"
            />
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              required
              name="email"
              className=" input text-black font-semibold focus:bg-orange-400 focus:text-white w-full"
              placeholder="Email"
            />
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              autoComplete="off"
              required
              name="photoURL"
              className=" input text-black font-semibold focus:bg-orange-400 focus:text-white w-full"
              placeholder="Photo URL"
            />
            {/* Password */}
            <label className="label">Password</label>
            <div className=" relative">
              <input
                type={show ? "text" : "password"}
                name="currentPassword"
                autoComplete="new-password"
                required
                className="input text-black font-semibold focus:bg-orange-400 focus:text-white w-full"
                placeholder="Password"
              />
              {show ? (
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className=" absolute top-3.5 right-3 z-50"
                >
                  <IoMdEyeOff size={15} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className=" absolute top-3.5 right-3 z-50"
                >
                  <FaEye size={15} />
                </button>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-neutral hover:bg-orange-400 hover:border-none hover:font-extrabold mt-4"
            >
              Register
            </button>
          </form>
          <button
            onClick={handelGoogleLogin}
            className=" btn   gap-3 rounded-md  bg-black text-white  font-semibold py-2.5 hover:bg-orange-400 hover:border-none hover:font-bold "
          >
            <FaGoogle size={24} /> Login With Google Login
          </button>
          <p className=" mt-1 ">
            Already have an account ?
            <Link
              className=" text-blue-500 hover:text-orange-400"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
