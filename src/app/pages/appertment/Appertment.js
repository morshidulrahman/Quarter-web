import React, { useEffect, useState } from "react";
import AppertmentCard from "../../components/appertment/AppertmentCard";
import Container from "../../shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../shared/Loader";

const Appertment = () => {
  const [itemperpage, setItemperpage] = useState(6);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: appertments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["appertments", itemperpage, currentPage],
    queryFn: async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/appertments?page=${currentPage}&size=${itemperpage}`
      );
      return data;
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/appertments-count`
      );
      setCount(data);
    };
    fetchData();
  }, []);

  const numberofPages = Math.ceil(count / itemperpage);
  const Pages = [...Array(numberofPages).keys()].map((e) => e + 1);

  const handlePagenation = (e) => {
    setCurrentPage(e);
  };

  if (isLoading || isError) return <Loader />;

  return (
    <Container>
      <h1>appertment</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-20">
        {appertments?.map((data) => (
          <AppertmentCard key={data._id} appertment={data} />
        ))}
      </div>
      {/* pagination  */}
      <div className="py-10">
        <div className="flex items-center justify-center">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePagenation(currentPage - 1)}
            className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md disabled:cursor-not-allowed  hover:bg-[#ff593cf4] hover:text-white"
          >
            <div className="flex items-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="mx-1">previous</span>
            </div>
          </button>
          {Pages.map((item, i) => (
            <button
              onClick={() => handlePagenation(item)}
              key={i}
              className={`hidden px-4 py-2 mx-1 ${
                currentPage == item ? "bg-[#ff593cf6] text-white" : ""
              } text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-md sm:inline hover:bg-[#ff5a3c] hover:text-white`}
            >
              {item}
            </button>
          ))}

          <button
            disabled={currentPage === numberofPages}
            onClick={() => handlePagenation(currentPage + 1)}
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-[#ff593cf4] hover:text-white disabled:cursor-not-allowed "
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Appertment;
