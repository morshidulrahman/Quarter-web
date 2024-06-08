import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { Logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    //  request interceptor
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access_token");
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // response
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log("error tracked in the interceptor", error.response);
        if (error.response?.status === 401 || error.response?.status === 403) {
          await Logout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [Logout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
