import React, { useState } from "react";
import Loader from "../../../shared/Loader";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import PaymentTable from "../../../dashboard/table/PaymentTable";

const PaymentHistory = () => {
  const [searchvalue, setserachvalue] = useState("");
  const { user, loading } = useAuth();
  const {
    data: payments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["agrementReq", user?.email],
    enabled: !loading || !!user?.email,
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/payments/${
          user?.email
        }?month=${searchvalue}`
      );
      return data;
    },
  });
  const handleSearch = () => {
    refetch();
  };

  if (isLoading || loading) return <Loader />;

  return (
    <section className="container px-4 mx-auto">
      <div className="py-4 relative w-1/2">
        <input
          type="text"
          value={searchvalue}
          onChange={(e) => setserachvalue(e.target.value)}
          placeholder="Search Month Name"
          className="w-full shadow-sm px-2 py-3 rounded-lg bg-gray-50 outline-none border-gray-200 border"
        />
        <button
          onClick={handleSearch}
          className="bg-[#ff5a3c] px-5 py-3 rounded-lg text-white absolute top-4 right-0 z-10 transition-all duration-300 hover:scale-105"
        >
          Search
        </button>
      </div>
      <div className="flex flex-col  ">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200   md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200  ">
                <thead className="bg-gray-50  ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <span className="text-gray-900 font-semibold">
                          Email
                        </span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span className="text-gray-900 font-semibold">
                          TransactionId
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span className="text-gray-900 font-semibold">
                          Price
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span className="text-gray-900 font-semibold">
                          Month
                        </span>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {payments.length === 0 && (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center text-xl h-72 font-bold"
                      >
                        No Payment Found
                      </td>
                    </tr>
                  )}
                  {payments.map((pay) => (
                    <PaymentTable payment={pay} key={pay._id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentHistory;
