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
import Dashboard from "../pages/dashboard/welcome/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import MemberRoute from "./MemberRoute";

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
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "admin-profile",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminProfile />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "agreement-request",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AgrementRequest />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-members",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageMember />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-cupons",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageCuppon />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "make-announcement",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <MakeAnnoucement />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "announcement",
        element: (
          <PrivateRoute>
            <AnnounceMents />
          </PrivateRoute>
        ),
      },
      {
        path: "user-profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "member-profile",
        element: (
          <PrivateRoute>
            <MemberRoute>
              <MemberProfile />
            </MemberRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "make-payment",
        element: (
          <PrivateRoute>
            <MemberRoute>
              <PaymentInfo />
            </MemberRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <MemberRoute>
              <CheckoutFrom />
            </MemberRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <MemberRoute>
              <PaymentHistory />
            </MemberRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
