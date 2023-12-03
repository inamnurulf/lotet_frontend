"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import CarousellCard from "./atom/carousellCard";

const Carousell = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "custom/carousell")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      })
      .then(() => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-[95vw] md:w-[30vw] h-[45vh]">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper rounded rounded-md'"
      >
        {data.length !== 0 ? (
          data.map((rows: any) => (
            <SwiperSlide key={rows._id}>
              <CarousellCard rows={rows} />
            </SwiperSlide>
          ))
        ) : (
          <div className="animate-pulse w-[95vw] md:w-[30vw] h-[45vh] bg-slate-300 rounded rounded-md flex justify-center items-center text-white">
            {" "}
            No data yet
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default Carousell;
