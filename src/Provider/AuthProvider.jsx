import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../FireBase/fireBase-config";
import { ToastContainer } from "react-toastify";
// import { createUserWithEmailAndPassword } from "firebase/auth/cordova";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const provider = new GoogleAuthProvider();
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(
      //   "current user inside useEffect on auth state changed",
      //   currentUser
      // );
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    register,
    logIn,
    googleLogin,
    logOut,
    user,
  };
  return (
    <div>
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
      <ToastContainer />
    </div>
  );
};

export default AuthProvider;
