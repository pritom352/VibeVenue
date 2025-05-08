import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { register, googleLogin, profileUpdate, setUser } =
    useContext(AuthContext);
  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;
    const password = e.target.password.value;
    register(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        // console.log(user);
        profileUpdate({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        toast("Register successful!");

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
      })
      .catch((error) => {
        toast(`${error}`);
      });
  };
  return (
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
            name="name"
            className=" input text-black font-semibold focus:bg-orange-400 focus:text-white w-full"
            placeholder="Name"
          />
          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className=" input text-black font-semibold focus:bg-orange-400 focus:text-white w-full"
            placeholder="Email"
          />
          {/* Photo URL */}
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            className=" input text-black font-semibold focus:bg-orange-400 focus:text-white w-full"
            placeholder="Photo URL"
          />
          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input text-black font-semibold focus:bg-orange-400 focus:text-white w-full"
            placeholder="Password"
          />
          {/* <div>
            <a className="link link-hover">Forgot password?</a>
          </div> */}
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
  );
};

export default Register;
