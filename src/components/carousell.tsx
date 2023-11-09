"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import CarousellCard from './atom/carousellCard';

const Carousell = () => {
  return (
    <div className='w-[95vw] md:w-[30vw] h-[45vh]'>
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
            <SwiperSlide>
              <CarousellCard/>
            </SwiperSlide>
            <SwiperSlide>
              <CarousellCard/>
            </SwiperSlide>
            <SwiperSlide>
              <CarousellCard/>
            </SwiperSlide>
        </Swiper>

      
    </div>
  )
}

export default Carousell
