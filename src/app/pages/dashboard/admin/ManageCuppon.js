import React, { useState } from "react";
import CupponModal from "../../../components/Modal/CupponModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../shared/Loader";
import CupponTable from "../../../dashboard/table/CupponTable";
import { useQuery } from "@tanstack/react-query";
import CupponEditModal from "../../../components/Modal/cupponEditModal";
const ManageCuppon = () => {
  const [isOpen, setisOpen] = useState(false);
  const [id, setId] = useState();
  const [isEditOpen, setisEditOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const {
    data: cuppons = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cuppons"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/cupon-codes`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

  const closeEditModal = () => {
    setisEditOpen(false);
  };

  const closeModal = () => {
    setisOpen(false);
  };

  const handleButton = (id) => {
    setId(id);
    setisEditOpen(true);
  };

  return (
    <section className="container px-4 mx-auto">
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => setisOpen(true)}
          className="bg-[#ff5a3c] text-white px-7 py-2 rounded-md transition-all duration-300 hover:scale-105  "
          type="submit"
        >
          Add Cuppon
        </button>
      </div>
      <div className="flex flex-col mt-4">
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
                          Coupon Code
                        </span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <span className="text-gray-900 font-semibold">
                          Discount percentage
                        </span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <span className="text-gray-900 font-semibold">
                          Description
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
                  {cuppons.map((cuppon) => (
                    <CupponTable
                      cuppon={cuppon}
                      key={cuppon._id}
                      setisOpen={setisOpen}
                      handleButton={handleButton}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CupponModal closeModal={closeModal} isOpen={isOpen} refetch={refetch} />

      <CupponEditModal
        closeModal={closeEditModal}
        isOpen={isEditOpen}
        refetch={refetch}
        id={id}
      />
    </section>
  );
};

export default ManageCuppon;
