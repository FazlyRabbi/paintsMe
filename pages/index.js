import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import logo from "../img/logo.png";
import { MdPhoneCallback, MdEmail } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import { Navbar } from "flowbite-react";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, Pagination]);

import TopSellingItems from "@/components/TopSellingItems";
import { FaStar } from "react-icons/fa";
import FooterNew from "@/components/FooterNew";
import BannerSlider from "@/components/BannerSlider";

// import images
import image2 from "../img/banner/unnamed2.png";
import image3 from "../img/banner/unnamed3.png";
import image4 from "../img/banner/unnamed4.png";
import letterhead from "../img/banner/letterhead.jpg";
import menu from "../img/banner/menu-9.jpg";

export default function Home() {
  return (
    <section>
      <Head>
        <title>Print and Graph</title>
      </Head>

      <header id="head" className="  sticky top-0  z-[9999]">
        <div className="header-top bg-[#1E1E1E] py-3">
          <div className="container mx-auto lg:px-10">
            <div className="header-top-content flex justify-between">
              <ul className="flex flex-wrap   items-center  text-white">
                <Link href={`tel:929 217-6589`}>
                  <li className="  border-r px-3 flex   items-center">
                    <MdPhoneCallback className="text-[1.2rem] text-second" />

                    <span className=" hidden lg:block tracking-wider ml-1 font-bold  text-[13px]">
                      929 217-6589
                    </span>
                  </li>
                </Link>
                <Link href={`mailto:nprintandgraph@gmail.com`}>
                  <li className="   px-3 flex   space-x-1 items-center">
                    <MdEmail className=" text-[1.2rem]" />
                    <span className="hidden lg:block  text-[13px]">
                      nprintandgraph@gmail.com
                    </span>
                  </li>
                </Link>
              </ul>

              <ul className="flex  text-white">
                <li className=" cursor-pointer  px-3  space-x-1  flex  items-center ">
                  <HiHome className="text-[1.5rem]" />
                  <div>
                    <p className="text-[12px]  hidden lg:block  leading-tight font-bold">
                      13220 Jamaica Ave
                      <span className="block text-[10px] font-normal">
                        Queens, NY 11418
                      </span>
                    </p>
                  </div>
                </li>
                <li className=" cursor-pointer  px-3  space-x-1  flex  items-center ">
                  <AiFillClockCircle className="text-[1.5rem]" />
                  <div>
                    <p className="text-[12px]  hidden lg:block  leading-tight font-bold">
                      Mon-Fri 9.00am-5.00pm
                      <span className="block text-[10px] font-normal">
                        Sat-Sun Closed
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-main  bg-white py-2  w-[100%] shadow-md">
          <div className="container mx-auto">
            <div className="header-main-lg   ">
              <Navbar fluid={true} rounded={true}>
                <Image
                  src={logo}
                  alt="logo"
                  height={150}
                  width={150}
                  className="text-center md:mb-6  md:ml-[15rem] lg:ml-0 lg:mb-0"
                />

                <Navbar.Toggle />

                <Navbar.Collapse>
                  <div className=" flex  items-center  space-x-14">
                    <Link href={"/"} className="font-bold text-[14px]">
                      Home
                    </Link>

                    <Link href={"/shop"} className="font-bold text-[14px]">
                      Our Services
                    </Link>
                    <Link href={"/aboutus"} className="font-bold text-[14px]">
                      About Us
                    </Link>

                    <Link href={"/contacts"} className="font-bold text-[14px]">
                      Contact
                    </Link>
                  </div>
                </Navbar.Collapse>

                <div className="dropdown  hidden lg:block  font-bold cursor-pointer">
                  <ul className="flex  space-x-3">
                    <li>
                      <Link href={"/shop"}>
                        <button className="bg-primary text-white p-2 rounded-lg cursor-pointer">
                          Place Order
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Navbar>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div>
          <BannerSlider />
        </div>

        <div className="bg-[#f5f7fa] px-6 py-16">
          <p className="text-[25px] text-center md:text-[40px] font-semibold mb-4">
            <span className="text-primary">Our Business </span> Brandings
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-16 gap-7 mx-2">
            <div className="col-span-1 xl:col-span-2 row-span-1 xl:row-span-2 relative flex">
              <Link
                href={`/shop/business%20card%20/menu/%20flayer/menu`}
                className="bg-white text-gray-800 px-5 py-2.5 text-titleSm md:text-xl font-semibold rounded-3xl absolute block bottom-5 left-1/2 -translate-x-1/2 hover:bg-deep-purple-800 hover:text-white"
              >
                Menu
              </Link>

              <Image
                src={menu}
                className="rounded-3xl shadow-md border"
                alt="img"
                height={400}
                width={800}
              />
            </div>
            <div className="col-span-1 xl:col-span-1 row-span-1 xl:row-span-1 relative flex">
              <Link
                href={`/shop/business%20card%20/menu/%20flayer/business%20cards`}
                className="bg-white px-5 py-2.5 text-titleSm md:text-xl font-semibold rounded-3xl absolute block bottom-5 left-1/2 -translate-x-1/2 hover:bg-deep-purple-800 hover:text-white"
              >
                Business Cards
              </Link>
              <Image
                src={image4}
                className="rounded-3xl  shadow-md border w-full"
                alt="img"
                height={400}
                width={800}
              />
            </div>
            <div className="col-span-1 xl:col-span-1 row-span-1 xl:row-span-1 relative flex">
              <Link
                href={`/shop/business%20card%20/menu/%20flayer/door%20hangers`}
                className="bg-white px-5 py-2.5 text-titleSm md:text-xl font-semibold rounded-3xl absolute block bottom-5 left-1/2 -translate-x-1/2 hover:bg-deep-purple-800 hover:text-white"
              >
                Door Hangers
              </Link>
              <Image
                src={image3}
                className="rounded-3xl   shadow-md border w-full"
                alt="img"
              />
            </div>
            <div className="col-span-1 xl:col-span-1 row-span-1 xl:row-span-1 relative flex">
              <Link
                href={`/shop/business%20card%20/menu/%20flayer/flyers`}
                className="bg-white px-5 py-2.5 text-titleSm md:text-xl font-semibold rounded-3xl absolute block bottom-5 left-1/2 -translate-x-1/2 hover:bg-deep-purple-800 hover:text-white"
              >
                FLyers
              </Link>
              <Image
                src={image2}
                className="rounded-3xl w-full shadow-md border "
                alt="img"
              />
            </div>
            <div className="col-span-1 xl:col-span-1 row-span-1 xl:row-span-1 relative flex">
              <Link
                href={`/shop/business%20card%20/menu/%20flayer/letterheads`}
                className="bg-white px-5 py-2.5 text-titleSm md:text-xl font-semibold rounded-3xl absolute block bottom-5 left-1/2 -translate-x-1/2 hover:bg-deep-purple-800 hover:text-white"
              >
                Letterheads
              </Link>
              <Image
                src={letterhead}
                className="rounded-3xl w-full shadow-md border "
                alt="img"
              />
            </div>
          </div>
          {/* top selling items */}
          <div className="my-20 mx-4">
            <div className="text-center my-10">
              <p className="text-[25px] md:text-[40px] font-semibold mb-4">
                <span className="text-primary">Top selling</span> items
              </p>
              <p className="text-titleSm font-light">
                There are many variations of passages of Lorem Ipsum available,{" "}
                <br /> but the majority have suffered
              </p>
            </div>
            <TopSellingItems />
          </div>
          {/* get instant service */}
          <div className="my-20">
            <div className="text-center my-10">
              <p className="text-primary font-semibold text-base tracking-widest">
                GET INSTANT SERVICE
              </p>
              <p className="text-[25px] md:text-[40px] font-semibold mb-4">
                Custom printec boxes &{" "}
                <span className="text-primary">
                  custom <br />
                  cardboard
                </span>{" "}
                packaging
              </p>
            </div>
            <div className="bg-[url('https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h6_bg1.png')] bg-no-repeat bg-center bg-contain mt-36">
              <div className="flex flex-col md:flex-row mx-6 gap-10 md:gap-12 lg:gap-24 xl:gap-32">
                <div>
                  <div className="bg-white p-5 lg:p-10 rounded-3xl text-center mt-0 md:-mt-10 shadow-lg">
                    <div className="w-fit mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Capa_1"
                        height="170"
                        viewBox="0 0 512 512"
                        width="170"
                      >
                        <g>
                          <path d="m431 368.737c4.143 0 7.5-3.358 7.5-7.5v-343.737c0-9.649-7.851-17.5-17.5-17.5h-266c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h266c1.379 0 2.5 1.122 2.5 2.5v73.589c-46.35-34.858-105.195-53.905-167.5-53.905s-121.15 19.048-167.5 53.905v-73.589c0-1.378 1.122-2.5 2.5-2.5h29c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-29c-9.649 0-17.5 7.851-17.5 17.5v477c0 9.649 7.851 17.5 17.5 17.5h330c9.649 0 17.5-7.851 17.5-17.5v-98.263c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v98.263c0 1.378-1.121 2.5-2.5 2.5h-330c-1.378 0-2.5-1.122-2.5-2.5v-384.288c44.988-37.438 104.316-58.028 167.5-58.028 63.185 0 122.513 20.59 167.5 58.028v251.025c0 4.142 3.357 7.5 7.5 7.5z"></path>
                          <path d="m344.246 417.667c0-4.142-3.357-7.5-7.5-7.5h-161.492c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h161.492c4.143 0 7.5-3.358 7.5-7.5z"></path>
                          <path d="m287.823 448.833c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h21.464c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
                          <path d="m202.712 448.833c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h50.288c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
                          <path d="m365.602 351.032c3.042-1.791 4.836-5.093 4.681-8.618-.154-3.509-2.221-6.626-5.393-8.135-4.283-2.037-8.653-4.253-13.043-6.617 2.566-4.718 4.61-9.436 6.604-14.038 1.525-3.52 3.104-7.16 4.886-10.721 1.883-3.762 1.096-8.232-1.959-11.122-3.062-2.897-7.58-3.437-11.242-1.345-60.704 34.693-127.567 34.692-188.272 0-3.662-2.094-8.18-1.554-11.243 1.345-3.054 2.891-3.84 7.361-1.957 11.124 1.782 3.559 3.359 7.199 4.885 10.719 1.995 4.603 4.039 9.32 6.604 14.038-4.388 2.362-8.757 4.579-13.042 6.616-3.172 1.508-5.238 4.625-5.393 8.135-.156 3.524 1.638 6.827 4.682 8.619 33.802 19.886 71.702 29.829 109.601 29.829 37.898 0 75.799-9.943 109.601-29.829zm-202.569-7.925c3.119-1.62 6.254-3.313 9.385-5.071 2.261-1.268 3.92-3.438 4.553-5.955.636-2.53.196-5.245-1.208-7.45-2.775-4.355-4.905-8.882-6.989-13.618 28.389 13.684 57.8 20.524 87.227 20.522 29.419-.002 58.848-6.843 87.228-20.523-2.084 4.736-4.214 9.263-6.99 13.62-1.403 2.203-1.843 4.917-1.207 7.447.632 2.516 2.291 4.687 4.551 5.955 3.132 1.758 6.269 3.453 9.387 5.072-58.207 30.341-127.733 30.341-185.937.001z"></path>
                          <path d="m217.927 120.328c-3.544.669-6.521 3.042-7.965 6.349l-51.739 118.523c-2.383 5.458-1.201 11.708 3.01 15.919 2.767 2.767 6.413 4.226 10.136 4.226 1.944 0 3.911-.398 5.783-1.215l118.521-51.739c3.305-1.442 5.679-4.419 6.35-7.962.67-3.543-.451-7.182-3.002-9.733l-71.364-71.363c-2.55-2.552-6.188-3.676-9.73-3.005zm-5.927 112.222c-2.568-13.977-7.554-27.397-14.674-39.436l9.609-22.013c12.458 15.081 20.677 33.907 23.242 53.514zm-39.396 17.198 17.014-38.975c3.979 8.82 6.753 18.259 8.207 27.965zm71.813-31.349c-3.929-23.32-14.824-45.456-30.853-62.482l7.738-17.727 62.859 62.859z"></path>
                          <path d="m295.964 159.907c1.598 3.823 5.992 5.623 9.813 4.026 11.979-5.011 27.275-1.922 36.372 7.344 1.468 1.496 3.409 2.246 5.352 2.246 1.896 0 3.794-.715 5.254-2.148 2.956-2.902 3-7.65.098-10.606-13.432-13.683-35.171-18.073-52.862-10.674-3.823 1.597-5.626 5.99-4.027 9.812z"></path>
                          <path d="m262.445 126.389c.945.395 1.926.583 2.891.583 2.934 0 5.72-1.732 6.922-4.608 7.399-17.691 3.01-39.43-10.674-52.863-2.955-2.902-7.705-2.857-10.606.098-2.902 2.956-2.858 7.705.098 10.606 9.265 9.096 12.354 24.392 7.344 36.371-1.599 3.821.204 8.214 4.025 9.813z"></path>
                          <path d="m304.588 125.264c1.919 0 3.839-.732 5.304-2.197l27.315-27.315c2.929-2.929 2.929-7.678 0-10.606-2.929-2.929-7.677-2.929-10.607 0l-27.315 27.315c-2.929 2.929-2.929 7.678 0 10.606 1.464 1.465 3.383 2.197 5.303 2.197z"></path>
                        </g>
                      </svg>
                    </div>
                    <p className="text-xl font-semibold text-gray-800 mt-8 mb-5">
                      Create Dieline
                    </p>
                    <p className="text-titleSm font-light">
                      Find the right box style or create a custom dieline
                      perfect for your product
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-white p-5 lg:p-10 rounded-3xl text-center mt-0 md:-mt-24 shadow-lg">
                    <div className="w-fit mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Capa_1"
                        height="170"
                        viewBox="0 0 512 512"
                        width="170"
                      >
                        <g>
                          <path d="m431 368.737c4.143 0 7.5-3.358 7.5-7.5v-343.737c0-9.649-7.851-17.5-17.5-17.5h-266c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h266c1.379 0 2.5 1.122 2.5 2.5v73.589c-46.35-34.858-105.195-53.905-167.5-53.905s-121.15 19.048-167.5 53.905v-73.589c0-1.378 1.122-2.5 2.5-2.5h29c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-29c-9.649 0-17.5 7.851-17.5 17.5v477c0 9.649 7.851 17.5 17.5 17.5h330c9.649 0 17.5-7.851 17.5-17.5v-98.263c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v98.263c0 1.378-1.121 2.5-2.5 2.5h-330c-1.378 0-2.5-1.122-2.5-2.5v-384.288c44.988-37.438 104.316-58.028 167.5-58.028 63.185 0 122.513 20.59 167.5 58.028v251.025c0 4.142 3.357 7.5 7.5 7.5z"></path>
                          <path d="m344.246 417.667c0-4.142-3.357-7.5-7.5-7.5h-161.492c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h161.492c4.143 0 7.5-3.358 7.5-7.5z"></path>
                          <path d="m287.823 448.833c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h21.464c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
                          <path d="m202.712 448.833c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h50.288c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
                          <path d="m365.602 351.032c3.042-1.791 4.836-5.093 4.681-8.618-.154-3.509-2.221-6.626-5.393-8.135-4.283-2.037-8.653-4.253-13.043-6.617 2.566-4.718 4.61-9.436 6.604-14.038 1.525-3.52 3.104-7.16 4.886-10.721 1.883-3.762 1.096-8.232-1.959-11.122-3.062-2.897-7.58-3.437-11.242-1.345-60.704 34.693-127.567 34.692-188.272 0-3.662-2.094-8.18-1.554-11.243 1.345-3.054 2.891-3.84 7.361-1.957 11.124 1.782 3.559 3.359 7.199 4.885 10.719 1.995 4.603 4.039 9.32 6.604 14.038-4.388 2.362-8.757 4.579-13.042 6.616-3.172 1.508-5.238 4.625-5.393 8.135-.156 3.524 1.638 6.827 4.682 8.619 33.802 19.886 71.702 29.829 109.601 29.829 37.898 0 75.799-9.943 109.601-29.829zm-202.569-7.925c3.119-1.62 6.254-3.313 9.385-5.071 2.261-1.268 3.92-3.438 4.553-5.955.636-2.53.196-5.245-1.208-7.45-2.775-4.355-4.905-8.882-6.989-13.618 28.389 13.684 57.8 20.524 87.227 20.522 29.419-.002 58.848-6.843 87.228-20.523-2.084 4.736-4.214 9.263-6.99 13.62-1.403 2.203-1.843 4.917-1.207 7.447.632 2.516 2.291 4.687 4.551 5.955 3.132 1.758 6.269 3.453 9.387 5.072-58.207 30.341-127.733 30.341-185.937.001z"></path>
                          <path d="m217.927 120.328c-3.544.669-6.521 3.042-7.965 6.349l-51.739 118.523c-2.383 5.458-1.201 11.708 3.01 15.919 2.767 2.767 6.413 4.226 10.136 4.226 1.944 0 3.911-.398 5.783-1.215l118.521-51.739c3.305-1.442 5.679-4.419 6.35-7.962.67-3.543-.451-7.182-3.002-9.733l-71.364-71.363c-2.55-2.552-6.188-3.676-9.73-3.005zm-5.927 112.222c-2.568-13.977-7.554-27.397-14.674-39.436l9.609-22.013c12.458 15.081 20.677 33.907 23.242 53.514zm-39.396 17.198 17.014-38.975c3.979 8.82 6.753 18.259 8.207 27.965zm71.813-31.349c-3.929-23.32-14.824-45.456-30.853-62.482l7.738-17.727 62.859 62.859z"></path>
                          <path d="m295.964 159.907c1.598 3.823 5.992 5.623 9.813 4.026 11.979-5.011 27.275-1.922 36.372 7.344 1.468 1.496 3.409 2.246 5.352 2.246 1.896 0 3.794-.715 5.254-2.148 2.956-2.902 3-7.65.098-10.606-13.432-13.683-35.171-18.073-52.862-10.674-3.823 1.597-5.626 5.99-4.027 9.812z"></path>
                          <path d="m262.445 126.389c.945.395 1.926.583 2.891.583 2.934 0 5.72-1.732 6.922-4.608 7.399-17.691 3.01-39.43-10.674-52.863-2.955-2.902-7.705-2.857-10.606.098-2.902 2.956-2.858 7.705.098 10.606 9.265 9.096 12.354 24.392 7.344 36.371-1.599 3.821.204 8.214 4.025 9.813z"></path>
                          <path d="m304.588 125.264c1.919 0 3.839-.732 5.304-2.197l27.315-27.315c2.929-2.929 2.929-7.678 0-10.606-2.929-2.929-7.677-2.929-10.607 0l-27.315 27.315c-2.929 2.929-2.929 7.678 0 10.606 1.464 1.465 3.383 2.197 5.303 2.197z"></path>
                        </g>
                      </svg>
                    </div>
                    <p className="text-xl font-semibold text-gray-800 mt-8 mb-5">
                      Create Dieline
                    </p>
                    <p className="text-titleSm font-light">
                      Find the right box style or create a custom dieline
                      perfect for your product
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-white p-5 lg:p-10 rounded-3xl text-center shadow-lg mt-0 md:-mt-10">
                    <div className="w-fit mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Capa_1"
                        height="170"
                        viewBox="0 0 512 512"
                        width="170"
                      >
                        <g>
                          <path d="m431 368.737c4.143 0 7.5-3.358 7.5-7.5v-343.737c0-9.649-7.851-17.5-17.5-17.5h-266c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h266c1.379 0 2.5 1.122 2.5 2.5v73.589c-46.35-34.858-105.195-53.905-167.5-53.905s-121.15 19.048-167.5 53.905v-73.589c0-1.378 1.122-2.5 2.5-2.5h29c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-29c-9.649 0-17.5 7.851-17.5 17.5v477c0 9.649 7.851 17.5 17.5 17.5h330c9.649 0 17.5-7.851 17.5-17.5v-98.263c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v98.263c0 1.378-1.121 2.5-2.5 2.5h-330c-1.378 0-2.5-1.122-2.5-2.5v-384.288c44.988-37.438 104.316-58.028 167.5-58.028 63.185 0 122.513 20.59 167.5 58.028v251.025c0 4.142 3.357 7.5 7.5 7.5z"></path>
                          <path d="m344.246 417.667c0-4.142-3.357-7.5-7.5-7.5h-161.492c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h161.492c4.143 0 7.5-3.358 7.5-7.5z"></path>
                          <path d="m287.823 448.833c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h21.464c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
                          <path d="m202.712 448.833c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h50.288c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
                          <path d="m365.602 351.032c3.042-1.791 4.836-5.093 4.681-8.618-.154-3.509-2.221-6.626-5.393-8.135-4.283-2.037-8.653-4.253-13.043-6.617 2.566-4.718 4.61-9.436 6.604-14.038 1.525-3.52 3.104-7.16 4.886-10.721 1.883-3.762 1.096-8.232-1.959-11.122-3.062-2.897-7.58-3.437-11.242-1.345-60.704 34.693-127.567 34.692-188.272 0-3.662-2.094-8.18-1.554-11.243 1.345-3.054 2.891-3.84 7.361-1.957 11.124 1.782 3.559 3.359 7.199 4.885 10.719 1.995 4.603 4.039 9.32 6.604 14.038-4.388 2.362-8.757 4.579-13.042 6.616-3.172 1.508-5.238 4.625-5.393 8.135-.156 3.524 1.638 6.827 4.682 8.619 33.802 19.886 71.702 29.829 109.601 29.829 37.898 0 75.799-9.943 109.601-29.829zm-202.569-7.925c3.119-1.62 6.254-3.313 9.385-5.071 2.261-1.268 3.92-3.438 4.553-5.955.636-2.53.196-5.245-1.208-7.45-2.775-4.355-4.905-8.882-6.989-13.618 28.389 13.684 57.8 20.524 87.227 20.522 29.419-.002 58.848-6.843 87.228-20.523-2.084 4.736-4.214 9.263-6.99 13.62-1.403 2.203-1.843 4.917-1.207 7.447.632 2.516 2.291 4.687 4.551 5.955 3.132 1.758 6.269 3.453 9.387 5.072-58.207 30.341-127.733 30.341-185.937.001z"></path>
                          <path d="m217.927 120.328c-3.544.669-6.521 3.042-7.965 6.349l-51.739 118.523c-2.383 5.458-1.201 11.708 3.01 15.919 2.767 2.767 6.413 4.226 10.136 4.226 1.944 0 3.911-.398 5.783-1.215l118.521-51.739c3.305-1.442 5.679-4.419 6.35-7.962.67-3.543-.451-7.182-3.002-9.733l-71.364-71.363c-2.55-2.552-6.188-3.676-9.73-3.005zm-5.927 112.222c-2.568-13.977-7.554-27.397-14.674-39.436l9.609-22.013c12.458 15.081 20.677 33.907 23.242 53.514zm-39.396 17.198 17.014-38.975c3.979 8.82 6.753 18.259 8.207 27.965zm71.813-31.349c-3.929-23.32-14.824-45.456-30.853-62.482l7.738-17.727 62.859 62.859z"></path>
                          <path d="m295.964 159.907c1.598 3.823 5.992 5.623 9.813 4.026 11.979-5.011 27.275-1.922 36.372 7.344 1.468 1.496 3.409 2.246 5.352 2.246 1.896 0 3.794-.715 5.254-2.148 2.956-2.902 3-7.65.098-10.606-13.432-13.683-35.171-18.073-52.862-10.674-3.823 1.597-5.626 5.99-4.027 9.812z"></path>
                          <path d="m262.445 126.389c.945.395 1.926.583 2.891.583 2.934 0 5.72-1.732 6.922-4.608 7.399-17.691 3.01-39.43-10.674-52.863-2.955-2.902-7.705-2.857-10.606.098-2.902 2.956-2.858 7.705.098 10.606 9.265 9.096 12.354 24.392 7.344 36.371-1.599 3.821.204 8.214 4.025 9.813z"></path>
                          <path d="m304.588 125.264c1.919 0 3.839-.732 5.304-2.197l27.315-27.315c2.929-2.929 2.929-7.678 0-10.606-2.929-2.929-7.677-2.929-10.607 0l-27.315 27.315c-2.929 2.929-2.929 7.678 0 10.606 1.464 1.465 3.383 2.197 5.303 2.197z"></path>
                        </g>
                      </svg>
                    </div>
                    <p className="text-xl font-semibold text-gray-800 mt-8 mb-5">
                      Create Dieline
                    </p>
                    <p className="text-titleSm font-light">
                      Find the right box style or create a custom dieline
                      perfect for your product
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* new product */}
          {/* <div>
            <div className="text-center my-10">
              <p className="text-[25px] md:text-[40px] font-semibold mb-4">
                New Products
              </p>
              <p className="text-titleSm font-light">
                There are many variations of passages of Lorem Ipsum available,{" "}
                <br /> but the majority have suffered
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
              <div className="col-span-1 md:col-span-1 xl:col-span-2 row-span-2 relative flex">
                <p className="text-white font-semibold tracking-widest uppercase absolute top-16 left-10">
                  Box by style
                </p>
                <p className="text-white font-bold text-[28px] absolute left-10 top-24">
                  Surprise <br /> large gormat
                </p>
                <button className="bg-white text-gray-800 px-5 py-2.5 text-xl font-semibold rounded-3xl absolute block top-56 left-10 ">
                  Shop Now
                </button>
                <img
                  src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h6_banner1.jpg"
                  className="rounded-3xl h-fit w-full"
                  alt="img"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 col-span-1 md:col-span-2 xl:col-span-3">
                <div className="">
                  <div className=" text-center">
                    <img
                      src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h6_cat1.jpg"
                      className="rounded-3xl w-full"
                      alt="img"
                    />
                    <p className="mt-5">Poster Mockup</p>
                    <p className="mt-3 text-[18px] font-semibold">
                      $9.90 – $49.90
                    </p>
                  </div>
                </div>
                <div className=" ">
                  <div className=" text-center">
                    <img
                      src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h6_cat1.jpg"
                      className="rounded-3xl w-full"
                      alt="img"
                    />
                    <p className="mt-5">Poster Mockup</p>
                    <p className="mt-3 text-[18px] font-semibold">
                      $9.90 – $49.90
                    </p>
                  </div>
                </div>
                <div className=" ">
                  <div className=" text-center">
                    <img
                      src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h6_cat1.jpg"
                      className="rounded-3xl w-full"
                      alt="img"
                    />
                    <p className="mt-5">Poster Mockup</p>
                    <p className="mt-3 text-[18px] font-semibold">
                      $9.90 – $49.90
                    </p>
                  </div>
                </div>
                <div className=" ">
                  <div className=" text-center">
                    <img
                      src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h6_cat1.jpg"
                      className="rounded-3xl w-full"
                      alt="img"
                    />
                    <p className="mt-5">Poster Mockup</p>
                    <p className="mt-3 text-[18px] font-semibold">
                      $9.90 – $49.90
                    </p>
                  </div>
                </div>
                <div className=" ">
                  <div className=" text-center">
                    <img
                      src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h6_cat1.jpg"
                      className="rounded-3xl w-full"
                      alt="img"
                    />
                    <p className="mt-5">Poster Mockup</p>
                    <p className="mt-3 text-[18px] font-semibold">
                      $9.90 – $49.90
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className=" text-center">
                    <img
                      src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h6_cat1.jpg"
                      className="rounded-3xl w-full"
                      alt="img"
                    />
                    <p className="mt-5">Poster Mockup</p>
                    <p className="mt-3 text-[18px] font-semibold">
                      $9.90 – $49.90
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* testimonial */}
        <div className="bg-[#edeef1] py-20">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="  w-full"
          >
            <SwiperSlide className=" w-full">
              <div>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="w-3/5 mx-auto text-center bg-[url('https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h4_bg1.png')] bg-no-repeat">
                  <p className="font-semibold text-[18px] md:text-[24px] text-gray-800 my-7">
                    Amazing place really nice people. Christina at the front
                    desk will get you situated she’s patient calm and
                    understanding. I’d recommend this place anytime😌
                  </p>

                  <p className="text-xl text-gray-900 font-medium">Tee Mil</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=" w-full">
              <div>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="w-3/5 mx-auto text-center bg-[url('https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h4_bg1.png')] bg-no-repeat">
                  <p className="font-semibold text-[18px] md:text-[24px] text-gray-800 my-7">
                    Theeeee best with fast turn around and excellent pricing
                    placed many orders with this company.
                  </p>

                  <p className="text-xl text-gray-900 font-medium">
                    Jessica Cherner
                  </p>
                  <p className="text-gray-500">Local Guide</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=" w-full">
              <div>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="w-3/5 mx-auto text-center bg-[url('https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h4_bg1.png')] bg-no-repeat">
                  <p className="font-semibold text-[18px] md:text-[24px] text-gray-800 my-7">
                    Great printing always ! Fast service nice workers . Thanks
                    so much
                  </p>

                  <p className="text-xl text-gray-900 font-medium">
                    Jessica Cherner
                  </p>
                  <p className="text-gray-500">Jas Andreya</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=" w-full">
              <div>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="w-3/5 mx-auto text-center bg-[url('https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h4_bg1.png')] bg-no-repeat">
                  <p className="font-semibold text-[18px] md:text-[24px] text-gray-800 my-7">
                    The entire team at NP&G are top notch! They responded to my
                    request quickly and with accuracy. The final products were
                    printed on time and most importantly was the quality!! I
                    purchased a fitted table cloth, wall banner, and sticker
                    labels and was literally “impressed” with the presentation
                    and high quality of the items. I am soo excited I decided to
                    use their service and will definitely be using them again!
                    Thank you so much!
                  </p>

                  <p className="text-xl text-gray-900 font-medium">
                    Jessica Cherner
                  </p>
                  <p className="text-gray-500">Chriss Garzon</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=" w-full">
              <div>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="w-3/5 mx-auto text-center bg-[url('https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h4_bg1.png')] bg-no-repeat">
                  <p className="font-semibold text-[18px] md:text-[24px] text-gray-800 my-7">
                    I placed an order for banner and canopies and their work is
                    immaculate and they delivered it on time as promised and
                    fair pricing. Will recommend this guys to everyone.
                  </p>

                  <p className="text-xl text-gray-900 font-medium">
                  Sandeep Gill
                  </p>
                  <p className="text-gray-500">Singh</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="bg-[#f5f7fa] px-7 py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div className="relative mx-auto">
            <p className="text-white text-sm md:text-base font-semibold tracking-widest uppercase absolute top-6 md:top-9 lg:top-12 xl:top-16 left-10">
              Flat 25% off
            </p>
            <p className="text-white font-bold text-xl md:text-[28px] absolute left-10 top-10 sm:top-14 md:top-16 lg:top-20 xl:top-24">
              Standard Business <br /> Cards
            </p>
            <Link
              href={`/shop/business%20card%20/menu/%20flayer/menu`}
              className="text-white border border-white sm:bg-white sm:text-gray-800 px-5 py-1.5 sm:px-5 sm:py-2.5 text-titleSm sm:text-[18px] font-semibold rounded-3xl absolute block  top-28 sm:top-36 md:top-40 lg:top-44 xl:top-52 left-10 "
            >
              Explore More
            </Link>
            <img
              src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h6_banner2.jpg"
              className="rounded-3xl"
              alt="img"
            />
          </div>
          <div className="relative mx-auto">
            <p className="text-white text-sm md:text-base font-semibold tracking-widest uppercase absolute top-6 md:top-9 lg:top-12 xl:top-16 left-10">
              Flat 25% off
            </p>
            <p className="text-white font-bold text-xl md:text-[28px] absolute left-10 top-10 sm:top-14 md:top-16 lg:top-20 xl:top-24">
              Booklet and <br /> log printing
            </p>
            <Link
              href={`/shop/business%20card%20/menu/%20flayer/letterheads`}
              className="text-white border border-white sm:bg-white sm:text-gray-800 px-5 py-1.5 sm:px-5 sm:py-2.5 text-titleSm sm:text-[18px] font-semibold rounded-3xl absolute block  top-28 sm:top-36 md:top-40 lg:top-44 xl:top-52 left-10 "
            >
              Explore More
            </Link>
            <img
              src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h6_banner3.jpg"
              className="rounded-3xl"
              alt="img"
            />
          </div>
        </div>

        <FooterNew />
      </section>
    </section>
  );
}
