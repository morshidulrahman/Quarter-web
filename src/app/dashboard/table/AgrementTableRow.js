import React from "react";
import { TimeChange } from "../../utils/TimeChange";
import toast from "react-hot-toast";
import axios from "axios";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const AgrementTableRow = ({ agrements, refetch }) => {
  const { name, email, floorNo, apartmentNo, blockName, rent, time } =
    agrements;
  const agrementTime = TimeChange(time);
  const axiosCommon = useAxiosCommon();

  const memberaccept = async () => {
    const userInfo = {
      status: "checked",
      role: "member",
      name,
      email,
      floorNo,
      apartmentNo,
      blockName,
      rent,
      time: Date.now(),
    };
    const { data } = await axiosCommon.post("/membersinfo", userInfo);
    return data;
  };

  const handleAccept = async () => {
    const userInfo = {
      status: "checked",
      role: "member",
    };

    try {
      const { data } = await axiosCommon.patch(
        `/agements-user/${email}`,
        userInfo
      );
      if (data.matchedCount > 0) {
        toast.success("agrement accepted");
        refetch();
        memberaccept();
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleReject = async () => {
    const userInfo = {
      status: "checked",
      role: "user",
    };

    try {
      const { data } = await axiosCommon.patch(
        `/agements-user/${email}`,
        userInfo
      );
      if (data.matchedCount > 0) {
        toast.success("agrement rejected");
        refetch();
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        {name}
      </td>
      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        {email}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500   whitespace-nowrap">
        {floorNo}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500   whitespace-nowrap">
        {blockName}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500   whitespace-nowrap">
        {apartmentNo}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500   whitespace-nowrap">
        {rent}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500   whitespace-nowrap">
        {agrementTime}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500   whitespace-nowrap flex gap-1">
        <button
          onClick={handleAccept}
          className="px-3 py-2 text-sm bg-green-500 text-white rounded-full flex items-center justify-center font-semibold duration-300 transition-all hover:scale-105"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="px-3 py-2 text-sm bg-red-500 text-white rounded-full flex items-center justify-center font-semibold duration-300 transition-all hover:scale-105"
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default AgrementTableRow;
