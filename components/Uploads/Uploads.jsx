import { CardContext } from "@/context/CardContext";
import { Breadcrumbs } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { BiUpload } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import PaperSize from "./PaperSize";

function Uploads() {
  const router = useRouter();

  const { cart, setCart, currentProduct, setCurrentProduct } =
    useContext(CardContext);

  const handleSubmit = (e) => {
    setCart([...cart, currentProduct]);
    localStorage.setItem("cart", JSON.stringify([...cart, currentProduct]));
    e.preventDefault();
    router.push("/shopping");
  };

  return (
    <section className="uploads mt-4 px-2">
      <div className="container mx-auto">
        <div className="wrapper grid grid-cols-1">
          <div className="uploads__title flex border-b border-gray-300  justify-between">
            <h4 className="font-bold text-[1.5rem] leading-tight">
              Add to Cart{" "}
              <span className="text-base font-normal">(Gatorboard)</span>
            </h4>

            <p className="text-primary font-bold cursor-pointer  rounded-md px-2 py-1  flex justify-center">
              <BsArrowLeftShort className="text-[1.5rem]" />
              <span className="block ">Back</span>
            </p>
          </div>
          <div className="my-6">
            <Breadcrumbs fullWidth className="font-bold">
              <a href="#" className="opacity-60">
                Docs
              </a>
              <a href="#" className="opacity-60">
                Components
              </a>
              <a href="#">Breadcrumbs</a>
            </Breadcrumbs>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <PaperSize />
            </div>
            <p className="text-red-600  text-base my-2">
              Please upload jpg,jpeg,gif,png,eps,ai,pdf,zip,tar,rar,cdr,psd,svg
              images only File should not be larger than 50MB in size.
            </p>
            <div className="jobNameField space-x-5 bg-gray-100 p-4 rounded-sm shadow-md">
              <label htmlFor="jobName" className="font-bold">
                Job Name :{" "}
              </label>
              <input
                id="jobName"
                required
                type="text"
                value={currentProduct?.jobName}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    jobName: e.target.value,
                  })
                }
                className="p1  w-[60%] rounded-md"
                placeholder="Type your job name"
              />
            </div>
            <div className="mt-4">
              <p className="font-bold py-2">Upload File</p>
            </div>{" "}
            <div className="relative">
              <input
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    file: e.target.files[0],
                  })
                }
                type="file"
                placeholder="Upload File"
                className=" rounded-md z-5"
              />
              {/* <span className=" px-10 flex    -z-10 absolute py-2 rounded-md  px- top-0 left-0 space-x-4 bg-gray-700  text-white ">
                <BiUpload className="text-[1.3rem] mr-1 block" />
                Select File
              </span> */}
            </div>
            <div className="flex justify-center  mt-[4rem]">
              <button
                type="submit"
                className=" bg-primary text-white font-bold  px-2 py-1 rounded-md"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Uploads;
