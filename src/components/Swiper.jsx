import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[650px] w-full "
      >
        <SwiperSlide className="">
          <div
            data-aos="zoom-in-up"
            className="flex flex-col justify-center items-center text-white text-center h-full md:w-[650px] mx-auto"
          >
            <h1 className="text-6xl font-bold">Unlimited Delivery</h1>
            <p className="text-xl font-medium mt-10">
              We help people save time, make their life better, exercising
              communications, both in business and in private life.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-aos="zoom-in-up"
            className="flex flex-col justify-center items-center text-white text-center h-full md:w-[650px] mx-auto"
          >
            <h1 className="text-6xl font-bold">
              A partnership based on trust.
            </h1>
            <p className="text-xl font-medium mt-10">
              We strive to ensure that our services have become a benchmark of
              quality in the field of the delivery.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-aos="zoom-in-up"
            className="flex flex-col justify-center items-center text-white text-center h-full md:w-[650px] mx-auto"
          >
            <h1 className="text-6xl font-bold">Comfortable Payment System.</h1>
            <p className="text-xl font-medium mt-10">
              Payment for services is made by credit or advanced system. A form
              of payment is in the discretion of the customer.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
