import React from "react";
import MoveCard from "./MoveCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TopRated = ({ move, search }) => {
  const topRatedMovies =
    move?.filter(
      (item) =>
        item.rating > 7 &&
        item.title.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-white mb-5">Top Rated Movies</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {topRatedMovies.length > 0 ? (
          topRatedMovies.map((movie, index) => (
            <SwiperSlide key={index}>
              <MoveCard move={movie} />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-300">
            No top rated movies found.
          </p>
        )}
      </Swiper>
    </div>
  );
};

export default TopRated;
