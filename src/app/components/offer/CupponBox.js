import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loader from "../../shared/Loader";

const CupponBox = () => {
  const { data: cuppons = [], isLoading } = useQuery({
    queryKey: ["cuppons"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/cupon-codes`
      );
      return data;
    },
  });
  if (isLoading) return <Loader />;
  return (
    <>
      <div className="grid grid-cols-2 text-center mb-4">
        <p className="font-semibold">Cuppon</p>
        <p className="font-semibold">Discount</p>
      </div>
      {cuppons.map((cuppon) => (
        <div className="grid grid-cols-2 text-center mb-2" key={cuppon._id}>
          <p>{cuppon?.code}</p>
          <p>{cuppon?.discount}</p>
        </div>
      ))}
    </>
  );
};

export default CupponBox;
