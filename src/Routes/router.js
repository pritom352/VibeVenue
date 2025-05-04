import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLoayout from "../Layout/HomeLoayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLoayout,
  },
]);
export default router;
