import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../Components/Loader";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className=" flex justify-center items-center">
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
