import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/auth/login"></Navigate>;
  }
  return children;
};

export default PrivetRoute;
