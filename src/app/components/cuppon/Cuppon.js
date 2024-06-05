import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const Cuppon = ({ closeModal, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { mutateAsync } = useMutation({
    mutationFn: async (cupponInfo) => {
      const { data } = await axiosSecure.post("/cupon-codes", cupponInfo);
      return data;
    },
    onSuccess: () => {
      closeModal();
      refetch();
      toast.success("cuppon created successfully");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const code = from.cupponCode.value;
    const discount = from.discount_percent.value;
    const description = from.cuppon_description.value;
    const cupponInfo = { code, discount, description };

    try {
      await mutateAsync(cupponInfo);
      from.reset();
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
          name="cupponCode"
          type="text"
          className="outline-none rounded-md border-gray-200 bg-gray-100 px-2 py-2 w-full"
        />
      </div>
      <div className="mt-3">
        <label className="font-semibold mb-3 block">Discount Percentage</label>
        <input
          name="discount_percent"
          type="number"
          className="outline-none rounded-md border-gray-200 bg-gray-100 px-2 py-2  w-full"
        />
      </div>
      <div className="mt-3">
        <label className="font-semibold mb-3 block">Cuppon Description</label>
        <textarea
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

export default Cuppon;
