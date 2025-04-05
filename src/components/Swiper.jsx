import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

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
        className="mySwiper h-[650px] md:w-full w-9/10 mx-auto"
      >
        <SwiperSlide className="">
          <div
            data-aos="zoom-in-up"
            className="flex flex-col justify-center items-center text-white text-center h-full md:w-[650px] mx-auto"
          >
            <h1 className="text-6xl font-bold">{t("home.slide1.title")}</h1>
            <p className="text-xl font-medium mt-10">
              {t("home.slide1.description")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-aos="zoom-in-up"
            className="flex flex-col justify-center items-center text-white text-center h-full md:w-[650px] mx-auto"
          >
            <h1 className="text-6xl font-bold">{t("home.slide2.title")}</h1>
            <p className="text-xl font-medium mt-10">
              {t("home.slide2.description")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-aos="zoom-in-up"
            className="flex flex-col justify-center items-center text-white text-center h-full md:w-[650px] mx-auto"
          >
            <h1 className="text-6xl font-bold">{t("home.slide3.title")}</h1>
            <p className="text-xl font-medium mt-10">
              {t("home.slide3.description")}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
