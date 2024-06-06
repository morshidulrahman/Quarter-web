import React from "react";
import Loader from "../../../shared/Loader";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import PaymentTable from "../../../dashboard/table/PaymentTable";

const PaymentHistory = () => {
  const { user, loading } = useAuth();
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["agrementReq", user?.email],
    enabled: !loading || !!user?.email,
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/payments/${user?.email}`
      );
      return data;
    },
  });

  if (isLoading || loading) return <Loader />;

  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
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
                          Date
                        </span>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
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
