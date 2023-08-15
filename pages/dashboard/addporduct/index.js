import DHeader from "@/components/Dashboard/DHeader";
import Head from "next/head";
import { useEffect, useState } from "react";
import slugify from "slugify";
// import leftmenu
import LeftMenu from "@/components/Dashboard/LeftMenu";
import RichText from "@/components/RitchText/RichText";
import useSweetAlert from "@/components/lib/sweetalert2";
import { API_TOKEN, API_URL } from "@/config/index";
import { useRef } from "react";
// import tailwind modal
import { Button, Card, CardBody, Input } from "@material-tailwind/react";

function addporduct() {
  const inital = {
    Title: "",
    Description: "",
    Cetegory: "",
    basePrice: "",
    bindedPrice: "",
    loosePrice: "",
    blackWhitePrice: "",
    colorPrice: "",
    mattePrice: "",
    glossPrice: "",
    businessDayPrice: "",
    nextDayPrice: "",
    sameDayPrice: "",
  };

  const [product, setProduct] = useState(inital);

  // generate slug
  const genrerateSlug = (string) => {
    const slug = slugify(string, {
      lower: true, // Convert to lowercase
      remove: /[*+~.()'"!:@]/g, // Remove special characters
    });
    setProduct({ ...product, Slug: slug });
  };

  useEffect(() => {
    genrerateSlug(product.Title);
  }, [product?.Title]);

  // showing alert
  const { showAlert } = useSweetAlert();

  const [isFatching, setIsFatching] = useState(false);

  const formData = typeof window !== "undefined" ? new FormData() : "";
  const [thubmnail1, setThubmnail1] = useState(null);
  const [thubmnail2, setThubmnail2] = useState(null);
  const [thubmnail3, setThubmnail3] = useState(null);
  const [thubmnail4, setThubmnail4] = useState(null);

  const inputFileRef = useRef(null);

  const form =
    typeof window !== "undefined" ? document.querySelector("form") : "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.append("data", JSON.stringify(product));
    if (!thubmnail1) return;
    formData.append(`files.Thubmnails_1`, thubmnail1, thubmnail1.name);
    if (!thubmnail2) return;
    formData.append(`files.Thubmnails_2`, thubmnail2, thubmnail2.name);
    if (!thubmnail3) return;
    formData.append(`files.Thubmnails_3`, thubmnail3, thubmnail3.name);
    if (!thubmnail4) return;
    formData.append(`files.Thubmnails_4`, thubmnail4, thubmnail4.name);

    setIsFatching(true);

    const res = await fetch(`${API_URL}/api/products?populate=*`, {
      method: "POST",
      headers: {
        Authorization: API_TOKEN,
      },

      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setIsFatching(true);
      showAlert({
        icon: "success",
        title: "Product Added Successfully!",
        showConfirmButton: false,
        timer: 1000,
      });

      setProduct(inital);
      inputFileRef.current.value = null;
      // reset the form element
      form.reset();
    }
  };

  return (
    <>
      <Head>
        <title>Project</title>
      </Head>

      <Head>
        <title>Project</title>
      </Head>
      <div className="grid  px-10 grid-cols-1 lg:grid-cols-5 gap-6 justify-items-left p-[3rem] ">
        <LeftMenu />
        <DHeader />

        <div className=" gap-y-2 gap-2 lg:col-span-4 gap-x-5 mt-5">
          <div className="project__form mt-[2rem]">
            <Card className="w-full">
              <h4 className=" text-center font-bold  text-[1.5rem] uppercase">
                Add Products
              </h4>

              <form onSubmit={handleSubmit}>
                <CardBody className="text-center gap-6  grid grid-cols-1 lg:grid-cols-2">
                  {/* left inputs */}
                  <div className="  space-y-10">
                    <Input
                      required
                      label="Title"
                      disabled={isFatching}
                      value={product.Title}
                      onChange={(e) =>
                        setProduct({ ...product, Title: e.target.value })
                      }
                    />
                    <Input
                      required
                      disabled={isFatching}
                      label="Slug"
                      value={product?.Slug}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          Slug: e.target.value,
                        })
                      }
                    />

                    <div>
                      <p
                        htmlFor="my-textarea"
                        className="text-left font-bold mb-3"
                      >
                        Description
                      </p>

                      <RichText setProduct={setProduct} product={product} />
                    </div>

                    <Input
                      required
                      disabled={isFatching}
                      label="Categorie"
                      value={product.Cetegory}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          Cetegory: e.target.value,
                        })
                      }
                    />

                    <Input
                      type="number"
                      required
                      disabled={isFatching}
                      label="Base Price"
                      value={product?.basePrice}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          basePrice: e.target.value,
                        })
                      }
                    />

                    {/* ==========Reinforce =========== */}
                    <div className=" space-y-5">
                      <p
                        htmlFor="my-textarea"
                        className="text-left font-bold mb-3"
                      >
                        Reinforce
                      </p>
                      <Input
                        type="number"
                        required
                        disabled={isFatching}
                        label="Binded Price"
                        value={product?.bindedPrice}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            bindedPrice: e.target.value,
                          })
                        }
                      />
                      <Input
                        type="number"
                        required
                        disabled={isFatching}
                        label="Loose Price"
                        value={product?.loosePrice}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            loosePrice: e.target.value,
                          })
                        }
                      />
                    </div>
                    {/* ==========Colors =========== */}
                    <div className=" space-y-5">
                      <p
                        htmlFor="my-textarea"
                        className="text-left font-bold mb-3"
                      >
                        Colors
                      </p>
                      <Input
                        type="number"
                        required
                        disabled={isFatching}
                        label="Black & White Price"
                        value={product?.blackWhitePrice}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            blackWhitePrice: e.target.value,
                          })
                        }
                      />
                      <Input
                        type="number"
                        required
                        disabled={isFatching}
                        label="Color Price"
                        value={product?.colorPrice}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            colorPrice: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* right inpurts */}
                  <div className=" space-y-10">
                    <div>
                      <p className=" text-left font-bold mb-3">Thubmnail 1</p>
                      <input
                        ref={inputFileRef}
                        required
                        disabled={isFatching}
                        name="files"
                        accept="image/jpeg, image/png , image/webp, "
                        type="file"
                        placeholder="Image"
                        className="flex justify-start "
                        onChange={(e) => setThubmnail1(e.target.files[0])}
                      />
                    </div>

                    <div>
                      <p className=" text-left font-bold mb-3">Thubmnail 2</p>
                      <input
                        ref={inputFileRef}
                        required
                        disabled={isFatching}
                        name="files"
                        accept="image/jpeg, image/png , image/webp"
                        type="file"
                        placeholder="Image"
                        className="flex justify-start "
                        onChange={(e) => setThubmnail2(e.target.files[0])}
                      />
                    </div>
                    <div>
                      <p className=" text-left font-bold mb-3">Thubmnail 3</p>
                      <input
                        ref={inputFileRef}
                        required
                        disabled={isFatching}
                        name="files"
                        accept="image/jpeg, image/png , image/webp"
                        type="file"
                        placeholder="Image"
                        className="flex justify-start"
                        onChange={(e) => setThubmnail3(e.target.files[0])}
                      />
                    </div>
                    <div>
                      <p className=" text-left font-bold mb-3">Thubmnail 4</p>
                      <input
                        ref={inputFileRef}
                        required
                        disabled={isFatching}
                        name="files"
                        accept="image/jpeg, image/png , image/webp"
                        type="file"
                        placeholder="Image"
                        className="flex justify-start"
                        onChange={(e) => setThubmnail4(e.target.files[0])}
                      />
                    </div>

                    {/* ==========Lamination =========== */}
                    <div className=" space-y-5">
                      <p
                        htmlFor="my-textarea"
                        className="text-left font-bold mb-3"
                      >
                        Lamination
                      </p>
                      <Input
                        type="number"
                        required
                        disabled={isFatching}
                        label="Matte Price"
                        value={product?.mattePrice}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            mattePrice: e.target.value,
                          })
                        }
                      />
                      <Input
                        type="number"
                        required
                        disabled={isFatching}
                        label="GlossPrice"
                        value={product?.glossPrice}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            glossPrice: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* ==========Production Time =========== */}
                    <div className=" space-y-5">
                      <p
                        htmlFor="my-textarea"
                        className="text-left font-bold mb-3"
                      >
                        Production Time
                      </p>
                      <Input
                        type="number"
                        required
                        disabled={isFatching}
                        label=" 2-3 Business Days Price"
                        value={product?.businessDayPrice}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            businessDayPrice: e.target.value,
                          })
                        }
                      />
                      <Input
                        type="number"
                        required
                        disabled={isFatching}
                        label=" Next Day Price"
                        value={product?.nextDayPrice}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            nextDayPrice: e.target.value,
                          })
                        }
                      />
                      <Input
                        type="number"
                        required
                        disabled={isFatching}
                        label=" Same Day Price"
                        value={product?.sameDayPrice}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            sameDayPrice: e.target.value,
                          })
                        }
                      />
                    </div>

                    <Button type="submit" size="md" disabled={isFatching}>
                      {isFatching ? (
                        <span className=" animate-ping">loading..</span>
                      ) : (
                        `   Add Product`
                      )}
                    </Button>
                  </div>
                </CardBody>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default addporduct;
