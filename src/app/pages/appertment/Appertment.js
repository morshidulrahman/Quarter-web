import React, { useEffect, useState } from "react";
import AppertmentCard from "../../components/appertment/AppertmentCard";
import Container from "../../shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../shared/Loader";

const Appertment = () => {
  const {
    data: appertments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["appertments"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/appertments");
      return data;
    },
  });

  if (isLoading || isError) return <Loader />;

  return (
    <Container>
      <h1>appertment</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-20">
        {appertments?.map((data) => (
          <AppertmentCard key={data._id} appertment={data} />
        ))}
      </div>
    </Container>
  );
};

export default Appertment;
