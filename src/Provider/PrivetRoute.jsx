import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import { ClockLoader } from "react-spinners";
import Loader from "../Components/Loader";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loader) {
    return (
      <div className=" flex justify-center items-center">
        {/* <ClockLoader color="orange" cssOverride={{}} size={250} /> */}
        <Loader></Loader>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }
  return children;
};

export default PrivetRoute;
