import React from "react";

const PaymentTable = ({ payment }) => {
  const { email, transactionId, price, date } = payment;

  // convert date time
  let dates = new Date(date + "-01");
  let options = { month: "short", year: "numeric" };
  let formattedDate = new Intl.DateTimeFormat("en-US", options).format(dates);

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
      <td className="px-4 py-4 text-base text-gray-600   whitespace-nowrap">
        {formattedDate}
      </td>
    </tr>
  );
};

export default PaymentTable;
