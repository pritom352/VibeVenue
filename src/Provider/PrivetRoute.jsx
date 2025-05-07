import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import { ClockLoader } from "react-spinners";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loader) {
    return (
      <div className=" flex justify-center items-center">
        <ClockLoader color="orange" cssOverride={{}} size={250} />
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }
  return children;
};

export default PrivetRoute;
