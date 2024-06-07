import React from "react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
const Hero = () => {
  return (
    <div className="">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-full h-[350px] lg:h-screen   banner_image3 ">
            <div className="z-50 lg:p-64 md:24 p-10 flex flex-col items-center justify-center">
              <Fade
                cascade={true}
                triggerOnce={true}
                damping={0.2}
                direction="up"
              >
                <h2 className="capitalize text-5xl  md:text-6xl font-bold text-white w-[60%] mx-auto text-center">
                  Find Your Dream Apartment by us
                </h2>
                <p className=" text-white py-4  w-[60%] mx-auto text-center">
                  Over 39,000 people work for us in more than 70 countries all
                  over the This breadth of global coverage, combined with
                  specialist services
                </p>
                <button className="bg-[#ff5a3c] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#ff5a3c] duration-300 transition-all border border-[#ff5a3c] capitalize mt-2">
                  make an inquiry
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[350px] lg:h-screen   banner_image2 ">
            <div className="z-50 lg:p-64 md:24 p-10 flex flex-col items-center justify-center">
              <Fade
                cascade={true}
                triggerOnce={true}
                damping={0.2}
                direction="up"
              >
                <h2 className="capitalize text-5xl  md:text-6xl font-bold text-white w-[60%] mx-auto text-center">
                  Find Your Dream Apartment by us
                </h2>
                <p className=" text-white py-4  w-[60%] mx-auto text-center">
                  Over 39,000 people work for us in more than 70 countries all
                  over the This breadth of global coverage, combined with
                  specialist services
                </p>
                <button className="bg-[#ff5a3c] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#ff5a3c] duration-300 transition-all border border-[#ff5a3c] capitalize mt-2">
                  make an inquiry
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[350px] lg:h-screen   banner_image ">
            <div className="z-50 lg:p-64 md:24 p-10 flex flex-col items-center justify-center">
              <Fade
                cascade={true}
                triggerOnce={true}
                damping={0.2}
                direction="up"
              >
                <h2 className="capitalize text-5xl  md:text-6xl font-bold text-white w-[60%] mx-auto text-center">
                  Find Your Dream Apartment by us
                </h2>
                <p className=" text-white py-4  w-[60%] mx-auto text-center">
                  Over 39,000 people work for us in more than 70 countries all
                  over the This breadth of global coverage, combined with
                  specialist services
                </p>
                <button className="bg-[#ff5a3c] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#ff5a3c] duration-300 transition-all border border-[#ff5a3c] capitalize mt-2">
                  make an inquiry
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
