// import image
import ThumbsGallery from "./Slider/ThumbGellery";

// import required modules
function ProductDetails({ details }) {
  return (
    <section className=" overflow-hidden w-full">
      <div className=" hidden"></div>

      <div className="product-slider">
        <ThumbsGallery
          url={{
            url_1: details?.attributes?.Thubmnails_1?.data?.attributes?.url,
            url_2: details?.attributes?.Thubmnails_2?.data?.attributes?.url,
            url_3: details?.attributes?.Thubmnails_3?.data?.attributes?.url,
            url_4: details?.attributes?.Thubmnails_4?.data?.attributes?.url,
          }}
        />
      </div>
      <div className="product-content mt-8 mb-4">
        <div
          dangerouslySetInnerHTML={{ __html: details?.attributes?.Description }}
        />
      </div>
    </section>
  );
}

export default ProductDetails;
