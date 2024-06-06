import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import CardPayment from "../CardPayment/CardPayment";
import Loader from "../../shared/Loader";
import axios from "axios";

const CheckoutFrom = () => {
  const { user, loading } = useAuth();
  const [dataLoading, setdataLoading] = useState(true);
  const [rent, setrent] = useState();
  const [date, setdate] = useState();
  const [cuppon, setcuppon] = useState("");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/payments-info/${user?.email}`
      );
      setrent(data.rent);
      setdate(data.month);
      setdataLoading(false);
    };
    getData();
  }, [user?.email]);

  if (dataLoading) return <Loader />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const cupponvalue = from.cuppon.value;
    if (cupponvalue === "") return toast.error("Please Provide a token");
    try {
      const { data } = await axiosSecure(`/cupon-codes/${cuppon}`);

      const { discount, code } = data;
      if (cuppon !== code) {
        return toast.error("Your Cuppon is Invalid");
      }
      toast.success(`You got ${discount} discount 🤩`);
      const newrent = rent - (rent * discount) / 100;
      setrent(newrent);

      from.reset();
    } catch (e) {
      toast.error(e.message);
      from.reset();
    }
  };

  return (
    <div className="py-16">
      <div className="w-full max-w-sm md:max-w-lg p-6 m-auto mx-auto bg-gray-100 rounded-lg shadow-md ">
        <div className="flex justify-center mx-auto">
          <p className="text-center font-bold py-1 text-2xl">Checkout From</p>
        </div>
        <h1>Total : {rent}</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-base text-gray-800">
              Apply Cuppon
            </label>
            <div className="flex gap-5 items-center">
              <input
                onChange={(e) => setcuppon(e.target.value)}
                name="cuppon"
                type="text"
                className="block w-[70%] px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 "
              />
              <button className="disabled:cursor-not-allowed mt-2 px-8 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff5a3c] rounded-lg">
                Apply
              </button>
            </div>
          </div>
        </form>
        <CardPayment rent={rent} date={date} />
      </div>
    </div>
  );
};

export default CheckoutFrom;
