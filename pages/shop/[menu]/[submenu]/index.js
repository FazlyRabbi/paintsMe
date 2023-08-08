import Calculator from "@/components/Calculator";
import Layout from "@/components/Layout";
import ProductDetails from "@/components/ProductDetails";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../../context/SidebarContext";
import slugify from "slugify";

function index() {
  const [singleProduct, setSingleProduct] = useState(null);
  const router = useRouter();
  const { products } = useContext(SidebarContext);

  useEffect(() => {
    const slug = slugify(`${router.query.submenu}`);
    const singleProduct = products?.find(
      (product) => product?.attributes.Slug === slug.toLowerCase()
    );
    setSingleProduct(singleProduct);
  }, [router.query.submenu]);

  return (
    <Layout title={router.query.submenu}>
      <div className="product heading ml-4 ">
        <Typography variant="h1" className={` my-3 text-[1.5rem]`}>
          {singleProduct && singleProduct.attributes.Title}
        </Typography>
      </div>
      <div className="wrapper p-4 grid xl:grid-cols-3 grid-cols-1 gap-16  ">
        <div className="xl:col-span-2 ">
          {singleProduct && <ProductDetails details={singleProduct} />}
        </div>
        <div>
          <Calculator product={singleProduct} />
        </div>
      </div>
    </Layout>
  );
}

export default index;
