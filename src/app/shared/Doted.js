import React from "react";

const Doted = ({ name, value }) => {
  return (
    <div className="flex gap-3">
      <span className="font-semibold block md:w-[20%] w-[30%]">{name}</span>
      <span className="block md:hidden">..............................</span>
      <span className="hidden md:block">
        {" "}
        .............................................................................
      </span>
      <span className="font-semibold md:w-[25%] w-[30%]">{value}</span>
    </div>
  );
};

export default Doted;
