import React from "react";

const CupponTable = ({ cuppon }) => {
  const { code, discount, description } = cuppon;
  return (
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
    </tr>
  );
};

export default CupponTable;
