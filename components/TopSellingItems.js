import { SidebarContext } from "@/context/SidebarContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay]);

function TopSellingItems() {

  const { products } = useContext(SidebarContext);
  const [splitProducts, setSplitProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const splitProducts = products.slice(0, 10);
      setSplitProducts(splitProducts);
    }
  }, [products]);

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
      spaceBetween={20}
      freeMode={true}
      // modules={[ Pagination]}
      className=""
    >
      {splitProducts &&
        splitProducts?.map((product, index) => (
          <SwiperSlide key={index} className="rounded-3xl">
            <div className="p-4">
              <Image
                src={product?.attributes?.Thubmnails_1?.data?.attributes?.url}
                height={300}
                width={300}
                alt="product banner"
                className=" rounded-3xl"
              />
              <p className="mt-5">{product?.attributes.Title}</p>
              <p className="mt-3">$17.00</p>
              <button className=" mt-5 w-full bg-black text-white rounded-3xl py-2.5">
                <Link
                  href={`/shop/${product?.attributes.Cetegory.toLowerCase()}/${
                    product?.attributes.Slug
                  }`}
                >
                  Add to cart
                </Link>
              </button>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
export default TopSellingItems;
