import React, { useState } from "react";

const CupponTable = ({ cuppon, handleButton }) => {
  const { code, discount, description, _id } = cuppon;

  const handleSubmit = () => {
    handleButton(_id);
  };
  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          {code}
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          {discount}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500   whitespace-nowrap">
          {description}
        </td>
        <td className="px-4 py-4 text-base text-gray-600   whitespace-nowrap flex gap-1">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 text-sm bg-green-400 text-white rounded-full flex items-center justify-center font-semibold duration-300 transition-all hover:scale-105"
          >
            Edit
          </button>
        </td>
      </tr>
    </>
  );
};

export default CupponTable;
