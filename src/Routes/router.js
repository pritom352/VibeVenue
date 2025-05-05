import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLoayout from "../Layout/HomeLoayout";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLoayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/myProfile",
        Component: MyProfile,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
export default router;
