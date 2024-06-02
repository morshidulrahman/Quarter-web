import React from "react";

const AppertmentCard = ({ appertment }) => {
  const {
    apartmentImage,
    apartmentName,
    description,
    floorNo,
    apartmentNo,
    blockName,
    rent,
  } = appertment;
  return (
    <div className="sm:max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-[300px] object-cover"
        src={apartmentImage}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{apartmentName}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pb-2 flex space-x-10 items-center">
        <p className="font-semibold">Floor No: {floorNo}</p>
        <p className="font-semibold">Appertment No: {apartmentNo} </p>
      </div>
      <div className="px-6 flex space-x-5 items-center  ">
        <p className="font-semibold">BlockName: {blockName} </p>
        <p className="font-semibold">Rent: {rent} </p>
      </div>
      <div className="flex items-center justify-center py-5 px-6">
        <button className="bg-[#ff5a3c] px-4 py-2  hover:bg-[#ff593cf4] text-white w-full rounded-md transition-all">
          Agreement
        </button>
      </div>
    </div>
  );
};

export default AppertmentCard;
