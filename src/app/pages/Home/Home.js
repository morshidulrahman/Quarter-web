import React from "react";
import Container from "../../shared/Container";
import Hero from "../../components/Hero/Hero";
import AboutBulding from "../../components/Bulding/AboutBulding";
import Cuppon from "../../components/offer/Cuppon";
import Location from "../../components/Location/Location";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutBulding />
      <Cuppon />
      <Location />
    </>
  );
};

export default Home;
