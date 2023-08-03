import  '../styles/ProductSlider.module.css';

import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Autoplay]);

function ProductSlider() {
    return (
        <Swiper
            breakpoints={{
                320: {
                    width: 320,
                    slidesPerView: 1,
                },
                640: {
                    width: 620,
                    slidesPerView: 2,
                },
                768: {
                    width: 768,
                    slidesPerView: 3,
                },
                1024: {
                    width: 1024,
                    slidesPerView: 4,
                }
            }}
            slidesPerView={4}
            spaceBetween={0}
            freeMode={true}
            // modules={[ Pagination]}
            className=""
        >
            <SwiperSlide className="rounded-3xl" id ="swiper-slide-product">
                <div className="relative">
                    <img src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h5_gallery2.jpg" alt="Avatar" className=" opacity-100  block h-auto ease-in rounded-3xl" />
                    <div className="ease-in opacity-0 hover:opacity-90 absolute top-0 left-0 bottom-0 right-0 bg-black h-full w-full rounded-3xl">
                        <button className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-100 px-5 py-3 rounded-full text-xl" >+</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl"  id ="swiper-slide-product">
                <div className="relative">
                    <img src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h5_gallery4.jpg" alt="Avatar" className=" opacity-100  block  h-auto ease-in rounded-3xl" />
                    <div className="ease-in opacity-0 hover:opacity-90 absolute top-0 left-0 bottom-0 right-0 bg-black h-full w-full rounded-3xl">
                        <button className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-100 px-5 py-3 rounded-full text-xl" >+</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl"  id ="swiper-slide-product">
                <div className="relative">
                    <img src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h5_gallery1.jpg" alt="Avatar" className="opacity-100   h-auto ease-in rounded-3xl" />
                    <div className="ease-in opacity-0 hover:opacity-90 absolute top-0 left-0 bottom-0 right-0 bg-black h-full w-full rounded-3xl">
                        <button className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-100 px-5 py-3 rounded-full text-xl" >+</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl"  id ="swiper-slide-product">
                <div className="relative">
                    <img src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h5_gallery3.jpg" alt="Avatar" className="opacity-100   h-auto ease-in rounded-3xl" />
                    <div className="ease-in opacity-0 hover:opacity-90 absolute top-0 left-0 bottom-0 right-0 bg-black h-full w-full rounded-3xl">
                        <button className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-100 px-5 py-3 rounded-full text-xl" >+</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl"  id ="swiper-slide-product">
                <div className="relative">
                    <img src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h5_gallery5.jpg" alt="Avatar" className="opacity-100  h-auto ease-in rounded-3xl" />
                    <div className="ease-in opacity-0 hover:opacity-90 absolute top-0 left-0 bottom-0 right-0 bg-black h-full w-full rounded-3xl">
                        <button className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-100 px-5 py-3 rounded-full text-xl" >+</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
export default ProductSlider;