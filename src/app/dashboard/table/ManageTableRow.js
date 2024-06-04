import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageTableRow = ({ data, refetch }) => {
  const { name, email, _id } = data;
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      const { data } = await axiosSecure.delete(`/member/${email}`);
      return data;
    },
    onSuccess: () => {
      toast.success("user removed successfully");
      refetch();
    },
  });

  const handleDelete = async () => {
    try {
      await mutateAsync();
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <tr>
      <td className="px-4 py-4 text-base text-gray-600   whitespace-nowrap">
        {name}
      </td>

      <td className="px-4 py-4 text-base text-gray-600   whitespace-nowrap">
        {email}
      </td>
      <td className="px-4 py-4 text-base text-gray-600   whitespace-nowrap flex gap-1">
        <button
          onClick={handleDelete}
          className="px-3 py-2 text-sm bg-red-600 text-white rounded-full flex items-center justify-center font-semibold duration-300 transition-all hover:scale-105"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default ManageTableRow;
