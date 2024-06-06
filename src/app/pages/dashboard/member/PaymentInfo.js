import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../shared/Loader";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PaymentInfo = () => {
  const { user, loading } = useAuth();

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { data: member = {}, isLoading: memberLoaing } = useQuery({
    queryKey: ["members", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_API_URL}/member/${user?.email}`
      );
      return data;
    },
  });

  if (memberLoaing || loading) return <Loader />;

  const { floorNo, apartmentNo, blockName, rent, email } = member;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const month = e.target.month.value;
    const Userinfo = {
      email: user?.email,
      rent,
      month,
    };
    try {
      const { data } = await axiosSecure.post(`/payments-info`, Userinfo);
      if (data.insertedId) {
        navigate("/dashboard/payment");
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="py-16">
      <div className="w-full max-w-sm md:max-w-lg p-6 m-auto mx-auto bg-gray-100 rounded-lg shadow-md ">
        <div className="flex justify-center mx-auto">
          <p className="text-center font-bold py-1 text-2xl">Payment Info</p>
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-base text-gray-800">Email</label>
            <input
              defaultValue={email}
              readOnly
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="flex justify-between mt-4 ">
            <div>
              <label className="block text-base text-gray-800">Floor No</label>
              <input
                defaultValue={floorNo}
                readOnly
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="block text-base text-gray-800">Block No</label>
              <input
                defaultValue={blockName}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="flex justify-between mt-4 ">
            <div>
              <label className="block text-base text-gray-800">
                Apartment No
              </label>
              <input
                defaultValue={apartmentNo}
                readOnly
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="block text-base text-gray-800">Rent</label>
              <input
                readOnly
                defaultValue={rent}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-base text-gray-800">Month</label>
            <input
              required
              name="month"
              placeholder="select a month"
              type="month"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff5a3c] rounded-lg   focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentInfo;
