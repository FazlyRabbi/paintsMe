import Image from "next/image";
import bag from "../img/bg/bag.webp";
import bottle from "../img/bg/bottol.webp";
import mog from "../img/bg/mog.webp";
import jacket from "../img/bg/jacket.webp";
import phone from "../img/bg/phone .webp";

import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Autoplay]);

function TopSellingItems() {
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
                    slidesPerView: 2,
                },
                1024: {
                    width: 1024,
                    slidesPerView: 3,
                },
            }}
            slidesPerView={4}
            spaceBetween={1}
            freeMode={true}
            // modules={[ Pagination]}
            className=""
        >

            <SwiperSlide className="rounded-3xl">
                <div className="p-2">
                <Image src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_33-600x600.jpg" height={290} width={290} alt="product banner" className=" rounded-3xl" />
                <p className="mt-5">Poster Mockup</p>
                <p className="mt-3">$12.00</p>
                <button className=" mt-5 w-full bg-black text-white rounded-3xl py-2.5">Add to cart</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl">
                <div className="p-2">
                <Image src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_13-600x600.jpg" height={290} width={290} alt="product banner" className=" rounded-3xl" />
                <p className="mt-5">Poster Mockup</p>
                <p className="mt-3">$12.00</p>
                <button className=" mt-5 w-full bg-black text-white rounded-3xl py-2.5">Add to cart</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl">
                <div className="p-2">
                <Image src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_28-600x600.jpg" height={290} width={290} alt="product banner" className=" rounded-3xl" />
                <p className="mt-5">Poster Mockup</p>
                <p className="mt-3">$12.00</p>
                <button className=" mt-5 w-full bg-black text-white rounded-3xl py-2.5">Add to cart</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl">
                <div className="p-2">
                <Image src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_19-600x600.jpg" height={290} width={290} alt="product banner" className=" rounded-3xl" />
                <p className="mt-5">Poster Mockup</p>
                <p className="mt-3">$12.00</p>
                <button className=" mt-5 w-full bg-black text-white rounded-3xl py-2.5">Add to cart</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl">
                <div className="p-2">
                <Image src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_16-600x600.jpg" height={400} width={400} alt="product banner" className=" rounded-3xl" />
                <p className="mt-5">Poster Mockup</p>
                <p className="mt-3">$12.00</p>
                <button className=" mt-5 w-full bg-black text-white rounded-3xl py-2.5">Add to cart</button>
                </div>
            </SwiperSlide>
      
           
        </Swiper>
    )
}
export default TopSellingItems;