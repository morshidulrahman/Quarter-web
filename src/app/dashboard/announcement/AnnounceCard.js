import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { TimeChange } from "../../utils/TimeChange";

const AnnounceCard = ({ announce }) => {
  const { description, title, date } = announce;
  const ChangeDate = TimeChange(date);
  return (
    <div className="w-[90%] border-gray-100 rounded-lg py-5 px-4 bg-green-50">
      <h1 className="font-semibold py-2">{title}</h1>
      <p>{description}</p>
      <p className="flex gap-2 items-center mt-1">
        <span>
          <CiCalendarDate size={20} />
        </span>
        <span>{ChangeDate}</span>
      </p>
    </div>
  );
};

export default AnnounceCard;
