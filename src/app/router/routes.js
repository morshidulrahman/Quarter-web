import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/signup/Signup";
import Appertment from "../pages/appertment/Appertment";
import DashboardLayout from "../layout/DashboardLayout";
import AgrementRequest from "../pages/dashboard/admin/AgrementRequest";
import ManageMember from "../pages/dashboard/admin/ManageMember";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/appertments",
        element: <Appertment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <h1>hello i ma sdasdlhf</h1>,
      },
      {
        path: "agreement-request",
        element: <AgrementRequest />,
      },
      {
        path: "manage-members",
        element: <ManageMember />,
      },
    ],
  },
]);

export default router;
