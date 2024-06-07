import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/signup/Signup";
import Appertment from "../pages/appertment/Appertment";
import DashboardLayout from "../layout/DashboardLayout";
import AgrementRequest from "../pages/dashboard/admin/AgrementRequest";
import ManageMember from "../pages/dashboard/admin/ManageMember";
import ManageCuppon from "../pages/dashboard/admin/ManageCuppon";
import MakeAnnoucement from "../pages/dashboard/admin/MakeAnnoucement";
import AnnounceMents from "../dashboard/announcement/AnnounceMents";
import UserProfile from "../pages/dashboard/user/UserProfile";
import MemberProfile from "../pages/dashboard/member/MemberProfile";
import CheckoutFrom from "../dashboard/Payment/CheckoutFrom";
import PaymentInfo from "../pages/dashboard/member/PaymentInfo";
import PaymentHistory from "../pages/dashboard/member/PaymentHistory";
import AdminProfile from "../pages/dashboard/admin/AdminProfile";

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
        path: "admin-profile",
        element: <AdminProfile />,
      },
      {
        path: "agreement-request",
        element: <AgrementRequest />,
      },
      {
        path: "manage-members",
        element: <ManageMember />,
      },
      {
        path: "manage-cupons",
        element: <ManageCuppon />,
      },
      {
        path: "make-announcement",
        element: <MakeAnnoucement />,
      },
      {
        path: "announcement",
        element: <AnnounceMents />,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "member-profile",
        element: <MemberProfile />,
      },
      {
        path: "make-payment",
        element: <PaymentInfo />,
      },
      {
        path: "payment",
        element: <CheckoutFrom />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
