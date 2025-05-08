import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLoayout from "../Layout/HomeLoayout";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import EventDetails from "../Pages/EventDetails";
import ErrorPage from "../Pages/ErrorPage";
import PrivetRoute from "../Provider/PrivetRoute";
import Faq from "../Pages/Faq";
import Loader from "../Components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLoayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/event.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/myProfile",
        Component: MyProfile,
      },
      {
        path: "/eventDetails/:id",
        element: (
          <PrivetRoute>
            <EventDetails></EventDetails>
          </PrivetRoute>
        ),
        loader: () => fetch("/event.json"),
        hydrateFallbackElement: <Loader></Loader>,
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
  {
    path: "/faq",
    element: (
      <PrivetRoute>
        <Faq></Faq>
      </PrivetRoute>
    ),
    loader: () => fetch("/FAQ.json"),
    hydrateFallbackElement: <Loader></Loader>,
  },
]);
export default router;
