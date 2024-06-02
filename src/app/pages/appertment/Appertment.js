import React, { useEffect, useState } from "react";
import AppertmentCard from "../../components/appertment/AppertmentCard";
import Container from "../../shared/Container";

const Appertment = () => {
  const [appertment, setappertment] = useState([]);
  useEffect(() => {
    fetch("app.json")
      .then((res) => res.json())
      .then((data) => setappertment(data));
  }, []);
  return (
    <Container>
      <h1>appertment</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-20">
        {appertment.map((data, ind) => (
          <AppertmentCard key={ind} data={data}></AppertmentCard>
        ))}
      </div>
    </Container>
  );
};

export default Appertment;
