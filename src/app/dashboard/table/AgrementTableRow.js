import React from "react";
import { TimeChange } from "../../utils/TimeChange";

const AgrementTableRow = ({ agrements }) => {
  const { name, email, floorNo, apartmentNo, blockName, rent, time } =
    agrements;

  const agrementTime = TimeChange(time);

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
        <button className="px-3 py-2 text-sm bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
          Accept
        </button>
        <button className="px-3 py-2 text-sm bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
          Reject
        </button>
      </td>
    </tr>
  );
};

export default AgrementTableRow;
