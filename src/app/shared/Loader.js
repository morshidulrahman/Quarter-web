import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <Bars
        height="50"
        width="50"
        color="#ff5a3c"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
