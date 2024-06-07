import React from "react";

const ProfileBox = ({ icon: Icon, label, value, percent }) => {
  return (
    <div className="bg-gray-50 shadow-md border border-gray-100 w-[80%] lg:w-[28%] p-5 rounded-md font-semibold text-lg flex items-center justify-between">
      <div className="text-white bg-[#ff5a3c] px-3 py-3 rounded-md">
        <Icon size={26} className="text-white" />
      </div>
      <div className="">
        <h3 className="font-semibold">{label}</h3>
        <p className="font-semibold text-center">
          {percent ? `${parseFloat(value / 100)} %` : value}
        </p>
      </div>
    </div>
  );
};

export default ProfileBox;
