import React from "react";
import Container from "../../shared/Container";
import Doted from "../../shared/Doted";

const AboutBulding = () => {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-center text-3xl font-bold capitalize mb-16">
          About the building
        </h1>
        <div className="flex justify-between gap-5 flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-[#ff5a3c] py-20 md:px-16 px-8 rounded-md w-full text-white">
            <h1 className="white font-bold text-3xl">Deluxe Portion</h1>
            <p className="py-6 text-white">
              Our building combines modern amenities and prime location for
              exceptional living. Enjoy spacious apartments with high-end
              finishes and smart home features. Amenities include a fitness
              center, rooftop terrace, secure parking, and 24/7 concierge
              service. Experience luxury and convenience with exceptional
              resident services and a vibrant community atmosphere
            </p>
            <div className="flex gap-5 flex-col ">
              <Doted name="Total Area" value="2800 Sq. Ft" />
              <Doted name="Bedroom" value="150 Sq. Ft" />
              <Doted name="Bathroom" value="60 Sq. Ft" />
              <Doted name="Belcony/Pets" value="Allowed" />
              <Doted name="Lounge" value="700 Sq. Ft" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <img
              src="https://tunatheme.com/tf/html/quarter-preview/quarter/img/others/10.png"
              alt="building_image"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutBulding;
