import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import AgrementTableRow from "../../../dashboard/table/AgrementTableRow";
import Loader from "../../../shared/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AgrementRequest = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: agrementList = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["agrementReq"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/agreementlists`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

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
                          Name
                        </span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span className="text-gray-900 font-semibold">
                          Email
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span className="text-gray-900 font-semibold">
                          Flore No
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span className="text-gray-900 font-semibold">
                          Block No
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span className="text-gray-900 font-semibold">
                          Room No
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span className="text-gray-900 font-semibold">
                          Rent
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
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-2">
                        <span className="text-gray-900 font-semibold">
                          Edit
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {agrementList?.map((data) => (
                    <AgrementTableRow
                      agrements={data}
                      key={data._id}
                      refetch={refetch}
                    />
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

export default AgrementRequest;
