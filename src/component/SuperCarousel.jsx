import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../index.css"; // dot color change এখান থেকে হবে

// 🔹 তোমার assets folder থেকে ছবি import করো
import slider1 from "../assets/banner.jpg";
import slider2 from "../assets/banner2.jpg";
import slider3 from "../assets/movie.jpg";
import slider4 from "../assets/squad.webp";
import slider5 from "../assets/Wednesday.webp";

export default function SuperCarousel() {
  // 🔸 সব ছবি এক array তে
  const slides = [slider1, slider2, slider3, slider4, slider5];

  return (
    <div className="w-full  mx-auto  overflow-hidden my-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // প্রতি 3 সেকেন্ডে slide change হবে
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        className="mySwiper"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[60vh]  md:h-[70vh] lg:h-[80vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
