import Layout from "@/components/Layout";
import SingleProduct from "@/components/SingleProduct";
import Slider from "@/components/Slider";
import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Shop() {
  const { products } = useContext(SidebarContext);

  console.log(products);

  return (
    <Layout title={"shop"}>
      <div className=" slider rounded-md my-4 mb-[2rem] md:mb-[3rem]  lg:h-[25rem] md:h-[12rem]">
        <Slider />
      </div>

      <div
        className="single-products px-4 md:px-0 grid md:grid-cols-2  lg:grid-cols-3  gap-x-5 
        gap-y-[2rem]  justify-center   justify-items-center"
      >
        {products.length !== 0 ? (
          products.map((product, index) => (
            <SingleProduct key={index} details={product} />
          ))
        ) : (
          <SkeletonTheme height={300} width={300}>
            <Skeleton count={1} />
            <Skeleton count={1} />
            <Skeleton count={1} />
            <Skeleton count={1} />
            <Skeleton count={1} />
            <Skeleton count={1} />
          </SkeletonTheme>
        )}
      </div>
    </Layout>
  );
}
