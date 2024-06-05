import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: role = "", isLoading } = useQuery({
    queryKey: ["role"],
    enabled: !loading || !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/${user?.email}`);
      return data;
    },
  });
  return [role, isLoading];
};

export default useRole;
