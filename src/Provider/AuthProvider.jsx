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
  const [loader, setloader] = useState(true);
  console.log(user);
  const provider = new GoogleAuthProvider();
  const register = (email, password) => {
    setloader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setloader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setloader(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setloader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(
      //   "current user inside useEffect on auth state changed",
      //   currentUser
      // );
      setUser(currentUser);
      setloader(false);
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
    loader,
  };
  return (
    <div>
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
      <ToastContainer />
    </div>
  );
};

export default AuthProvider;
