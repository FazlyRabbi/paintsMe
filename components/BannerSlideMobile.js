import Image from "next/image";
import hero4 from '../img/rev_home3_4.png'
import hero1 from '../img/rev_home6_1.jpg'
import hero2 from '../img/rev_home6_2.jpg'
import hero3 from '../img/rev_home6_3.png'
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Autoplay, Pagination]);

function BannerSlideMobile() {
    return (
        <Swiper
            pagination={true}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className=" h-full w-full"
        >
            <SwiperSlide className="w-full" style={{ backgroundImage: `url(${hero1.src})` }}>
                <div className=" w-full h-screen bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero4.src})` }}>
                    <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white mx-0">
                        <p className='font-semibold tracking-widest uppercase text-sm mt-2'>Custom Boxes</p>
                        <p className="font-extrabold text-[28px] md:text-[36px] mt-6">Customized bulk <br /> Paper bags</p>
                        <p className='font-normal mt-6'>Turn your ideas into premium products that <br /> leave a lasting impression </p>
                        <button className="bg-white text-gray-800 px-7 py-2.5 text-[18px] font-semibold rounded-3xl mt-10">Shop now</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-full" style={{ backgroundImage: `url(${hero2.src})` }}>
                <div className=" w-full h-screen bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero3.src})` }}>
                    <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white mx-0">
                        <p className='font-semibold tracking-widest uppercase text-sm mt-2'>Custom Boxes</p>
                        <p className="font-extrabold text-[28px] md:text-[36px] mt-6">Customized bulk <br /> Paper bags</p>
                        <p className='font-normal mt-6'>Turn your ideas into premium products that <br /> leave a lasting impression </p>
                        <button className="bg-white text-gray-800 px-7 py-2.5 text-[18px] font-semibold rounded-3xl mt-10">Shop now</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper >
    )
}
export default BannerSlideMobile;