import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import s1 from "../img/s1.jpg";
import s2 from "../img/s2.jpg";
import s3 from "../img/s3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Scrollbar, Mousewheel, Pagination } from "swiper";

export default function AboutSlider() {
  return (
    <div>
      {" "}
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper min-h-[20rem] mt-[3rem]"
      >
        <SwiperSlide>
          <Image src={s2} height={1600} width={1600} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={s2} height={1600} width={1600} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={s3} height={1600} width={1600} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={s3} height={1600} width={1600} alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
