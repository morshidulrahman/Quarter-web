import React from "react";
import useRole from "../hooks/useRole";
import Loader from "../shared/Loader";
import { Navigate } from "react-router-dom";

const MemberRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <Loader />;
  if (role === "member") return children;

  return <Navigate to="/dashboard" />;
};

export default MemberRoute;
