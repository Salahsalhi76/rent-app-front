import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}

        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.bayut.com/thumbnails/317481965-800x600.webp"/></SwiperSlide>
        <SwiperSlide><img src="https://images.bayut.com/thumbnails/317967097-800x600.webp"/></SwiperSlide>

      </Swiper>
  );
}
