import { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { API_TOKEN, API_URL } from "../config";
import hero3 from "../img/rev_home6_2.jpg";
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
      {sliders &&
        sliders.map((slider, index) => (
          <SwiperSlide key={index} className=" w-full">
            <div
              className="flex w-full h-screen mx-0"
              style={{
                backgroundImage: `url(${slider?.attributes?.images?.data?.attributes?.url})`,
              }}
            >
              <div className="text-left px-4 py-8 md:px-7 md:py-12 lg:px-14 lg:py-20 w-1/2">
                <p className="text-white font-semibold tracking-widest uppercase text-sm mt-2">
                  Custom Boxes
                </p>
                <p className="text-white font-extrabold text-[28px] md:text-[32px] lg:text-[40px] mt-6">
                  Customized bulk <br /> Paper bags
                </p>
                <p className="text-white font-normal mt-6">
                  Turn your ideas into premium products that <br /> leave a
                  lasting impression{" "}
                </p>
                <button className="bg-white text-gray-800 px-7 py-2.5 text-[18px] font-semibold rounded-3xl mt-10">
                  Shop now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
export default BannerSlider;
