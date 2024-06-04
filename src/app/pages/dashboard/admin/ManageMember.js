import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../shared/Loader";
import ManageTableRow from "../../../dashboard/table/ManageTableRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageMember = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: members = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_API_URL}/members`
      );
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
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <span className="text-gray-900 font-semibold">
                          Action
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {members?.map((item) => (
                    <ManageTableRow
                      data={item}
                      key={item._id}
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

export default ManageMember;
