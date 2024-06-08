import React, { useState } from "react";
import Container from "../../shared/Container";
import AllCupponModal from "../Modal/AllCupponModal";

const Cuppon = () => {
  const [isOpen, setisOpen] = useState(false);

  const closeModal = () => {
    setisOpen(false);
  };

  return (
    <Container>
      <section className=" py-16">
        <h2 className="font-bold pb-10 text-center text-4xl font-raleway">
          Best offers for you
        </h2>
        <div className="gap-8 w-full grid lg:grid-cols-2 mt-5 grid-cols-1">
          <div className="bg-green-400 rounded-2xl flex w-full justify-between">
            <div className="flex flex-col items-center justify-center w-[50%]">
              <h3 className=" text-3xl md:text-5xl font-bold mb-2">10% OFF</h3>
              <p className="text-center mb-2 font-semibold text-lg">
                on your next purchase
              </p>
            </div>
            <div className="w-[9%]">
              <img
                src="https://i.ibb.co/xXmz7Sr/cupon-devider.png"
                alt="cuppon"
              />
            </div>
            <div className="w-[40%] flex flex-col items-center justify-center">
              <h4 className="text-2xl md:text-3xl font-bold mb-2 flex items-center font-raleway">
                <p>MAINT10</p>
              </h4>
              <p className="font-semibold">Coupon Code</p>
            </div>
          </div>
          <div className="bg-[#ff5a3c] rounded-2xl flex w-full justify-between">
            <div className="flex flex-col items-center justify-center w-[50%]">
              <h3 className="text-3xl md:text-5xl font-bold mb-2">20% OFF</h3>
              <p className="text-center mb-2 font-semibold text-lg">
                on your next purchase
              </p>
            </div>
            <div className="w-[9%]">
              <img
                src="https://i.ibb.co/xXmz7Sr/cupon-devider.png"
                alt="cuppon"
              />
            </div>
            <div className="w-[40%] flex flex-col items-center justify-center">
              <h4 className="text-2xl md:text-3xl font-bold mb-2 flex items-center font-raleway">
                GYMFREE
              </h4>
              <p className="font-semibold">Coupon Code</p>
            </div>
          </div>
        </div>
        <div className="mx-auto lg:w-1/3 mt-10 flex items-center justify-center w-[70%]">
          <button
            onClick={() => setisOpen(true)}
            className="bg-[#ff5a3c] text-white px-4 py-3 rounded-md  duration-300 transition-all border border-[#ff5a3c] capitalize mt-2 hover:scale-105 shadow-md"
          >
            See All Cuppons
          </button>
        </div>
      </section>
      <AllCupponModal isOpen={isOpen} closeModal={closeModal} />
    </Container>
  );
};

export default Cuppon;
