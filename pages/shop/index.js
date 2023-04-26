import Layout from "@/components/Layout";
import SingleProduct from "@/components/SingleProduct";
import Slider from "@/components/Slider";
import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";

export default function Shop() {
  const { products } = useContext(SidebarContext);

  return (
    <Layout title={"shop"}>
      <div className=" slider rounded-md my-4 mb-[2rem] md:mb-[3rem]  lg:h-[25rem] md:h-[12rem]">
        <Slider />
      </div>

      <div
        className="single-products px-4 md:px-0 grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-x-5 
        gap-y-[2rem]  justify-center   justify-items-center"
      >
        {products &&
          products.map((product, index) => (
            <SingleProduct key={index} details={product} />
          ))}
      </div>
    </Layout>
  );
}

