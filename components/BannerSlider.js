import { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { API_TOKEN, API_URL } from "../config";


import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

SwiperCore.use([Navigation, Autoplay, Pagination]);

function BannerSlider() {
  const [sliders, setSliders] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/home-sliders?populate=*`, {
      method: "GET",
      headers: {
        Authorization: API_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSliders(data?.data);
      })
      .catch((err) => console.error(err));
  }, []);



  return (
    <Swiper
      pagination={true}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className=" max-h-[35rem] w-full"
    >
      {sliders ? (
        sliders.map((slider, index) => (
          <SwiperSlide key={index} className=" w-full">
            <div
              className="flex w-full h-screen mx-0 "
              style={{
                backgroundImage: `url(${slider?.attributes?.images?.data?.attributes?.url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </SwiperSlide>
        ))
      ) : (
        <SkeletonTheme height={650} baseColor="#202020" highlightColor="#444">
          <Skeleton count={1} circle={false} />
        </SkeletonTheme>
      )}
    </Swiper>
  );
}
export default BannerSlider;
