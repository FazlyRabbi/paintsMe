import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutImage from "../../img/aboutus.jpg";
import Image from "next/image";
import AboutSlider from "@/components/AboutSlider";

export default function AboutUs() {
  return (
    <section className="about-us">
      <Header />
      <div className="container  py-6 mx-auto">
        <div className="aboutus-content  py-10  grid sm:grid-cols-1 lg:grid-cols-2  gap-0  sm:justify-items-start  lg:justify-items-center   ">
          <div className="about-img">
            <Image src={aboutImage} height={550} width={550} alt="img" />
          </div>
          <div className="about-des mt-[3rem]">
            <p className="company-title  text-primary font-semibold    tracking-wider mb-3">
              About Print & Graph
            </p>
            <h4 className="font-bold  leading-[4rem] text-[50px] mb-8 ">
              Best Printing <br />
              Services in Print & Craft
            </h4>
            <p className="  text-justify text-gray-500  md:pr-60 sm:pr-0">
              Lino Press NY provides a range of timely, high-quality and
              cost-effective printing and document services using
              environmentally friendly materials. Our specialist staff can
              advise you on all your printing needs, from design to the finished
              product. To grow your business you need to promote your business.
              We can print and produce a wide variety of marketing materials
              with professional results. Whatever size project you have to
              tackle, you can count on our experts every step of the way.
            </p>
            <button
              className="bg-primary text-white font-bold px-10 py-5
           mt-6  rounded-full"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      <div className="about-slider">
        <AboutSlider />
      </div>
      <div className="about-team container mx-auto p-10 mt-10  text-center">
        <div className="team-content flex justify-center  text-center    ">
          <div className="content-main">
            <h4 className=" tracking-wider text-primary mb-1">
              Our Professionals
            </h4>
            <h2 className="font-bold text-[30px] mb-4">Meet the Team</h2>
            <p className=" text-[16px] text-gray-500">
              The Lino Press NY team is here to help you with all your printing
              and copying needs. We offer a complete <br /> suite of printing
              services with quick turnaround times and delivery.
            </p>
          </div>
        </div>

        <div className="bio grid sm:grid-cols-1 md:grid-cols-3 gap-2 mt-12  justify-center justify-items-center  gap-y-8 lg:px-64">
          <div className="text-center">
            <h5 className="name text-gray-500">Hector J. Taveras</h5>
            <h5 className="profession text-primary font-bold">
              General Manager
            </h5>
          </div>
          <div className="text-center">
            <h5 className="name text-gray-500">Hector J. Taveras</h5>
            <h5 className="profession text-primary font-bold">
              General Manager
            </h5>
          </div>
          <div className="text-center">
            <h5 className="name text-gray-500">Hector J. Taveras</h5>
            <h5 className="profession  font-bold">General Manager</h5>
          </div>
          <div className="text-center">
            <h5 className="name text-gray-500">Hector J. Taveras</h5>
            <h5 className="profession text-primary font-bold">
              General Manager
            </h5>
          </div>
          <div className="text-center">
            <h5 className="name text-gray-500">Hector J. Taveras</h5>
            <h5 className="profession text-primary font-bold">
              General Manager
            </h5>
          </div>
          <div className="text-center">
            <h5 className="name text-gray-500">Hector J. Taveras</h5>
            <h5 className="profession  font-bold">General Manager</h5>
          </div>
        </div>
        <button
          className="bg-primary  text-white  px-12 py-5
           mt-11  rounded-full capitalize"
        >
          view more
        </button>
      </div>
      <Footer />
    </section>
  );
}
