import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const EditCuppon = ({ closeModal, refetch, id }) => {
  console.log("cupponid", id);
  const axiosSecure = useAxiosSecure();

  const { data: cuppons = {}, isLoading } = useQuery({
    queryKey: ["singlecuppon", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/cupon/${id}`);
      return data;
    },
  });

  const { code, discount, description } = cuppons;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const code = from.cupponCode.value;
    const discount = from.discount_percent.value;
    const description = from.cuppon_description.value;
    const cupponInfo = { code, discount, description };

    try {
      const { data } = await axiosSecure.put(`/cupon/${id}`, cupponInfo);
      if (data.matchedCount) {
        refetch();
        closeModal();
        toast.success("cuppon updated successfully");
      }
    } catch (e) {
      toast.error(e.message);
      from.reset();
    }
  };

  return (
    <form className="py-3" onSubmit={handleSubmit}>
      <div>
        <label className="font-semibold mb-3 block">Cuppon Code</label>
        <input
          defaultValue={code}
          name="cupponCode"
          type="text"
          className="outline-none rounded-md border-gray-200 bg-gray-100 px-2 py-2 w-full"
        />
      </div>
      <div className="mt-3">
        <label className="font-semibold mb-3 block">Discount Percentage</label>
        <input
          defaultValue={discount}
          name="discount_percent"
          type="number"
          className="outline-none rounded-md border-gray-200 bg-gray-100 px-2 py-2  w-full"
        />
      </div>
      <div className="mt-3">
        <label className="font-semibold mb-3 block">Cuppon Description</label>
        <textarea
          defaultValue={description}
          name="cuppon_description"
          type="number"
          className="outline-none rounded-md border-gray-200 bg-gray-100 px-2 h-24 w-full"
        />
      </div>
      <button
        className="mt-4 bg-[#ff5a3c] text-white px-7 py-2 rounded-md transition-all duration-300 hover:scale-105"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default EditCuppon;
