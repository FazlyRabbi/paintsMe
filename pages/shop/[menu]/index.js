import Layout from "@/components/Layout";
import SingleProduct from "@/components/SingleProduct";
import { API_TOKEN } from "@/config/index";
import { SidebarContext } from "@/context/SidebarContext";
import { Breadcrumbs } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";


export default function productDetails() {

  const route = useRouter();

  const { products } = useContext(SidebarContext);

  const [filterdProducts, setFilterdProducts] = useState([]);

  useEffect(() => {
    const filter = products.filter(
      (product) =>
        product.attributes.Cetegory.toLocaleLowerCase() ===
        route.query.menu.toLocaleLowerCase()
    );

    setFilterdProducts(filter);
  }, [route.query.menu]);

  return (
    <Layout>
      <div className=" mb-4 ">
        {filterdProducts != 0 ? (
          <Breadcrumbs fullWidth>
            <a href="#" className="opacity-60">
              Docs
            </a>
            <a href="#" className="opacity-60">
              Components
            </a>
            <a href="#">Breadcrumbs</a>
          </Breadcrumbs>
        ) : (
          ""
        )}
      </div>

      <div
        className="single-products px-4 md:px-0 grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-x-5 
        gap-y-[2rem]  justify-center   justify-items-center"
      >
        {filterdProducts.length != 0
          ? filterdProducts.map((product, index) => (
              <SingleProduct details={product} key={index} />
            ))
          : "No Product Exist"}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: { params },
    revalidate: 3,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/sidebars?populate=*`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  });

  const path = await res.json();

  return {
    paths: path.data.map((menu) => {
      return {
        params: {
          menu: menu.attributes.MainManu,
        },
      };
    }),

    fallback: true,
  };
}
