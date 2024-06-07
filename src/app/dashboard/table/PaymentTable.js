import React from "react";

const PaymentTable = ({ payment }) => {
  const { email, transactionId, price, date } = payment;

  return (
    <tr>
      <td className="px-4 py-4 text-base text-gray-600   whitespace-nowrap">
        {email}
      </td>

      <td className="px-4 py-4 text-base text-gray-600   whitespace-nowrap">
        {transactionId}
      </td>
      <td className="px-4 py-4 text-base text-gray-600   whitespace-nowrap">
        {price}
      </td>
      <td className="px-4 py-4 text-base text-gray-600   whitespace-nowrap capitalize">
        {date}
      </td>
    </tr>
  );
};

export default PaymentTable;
