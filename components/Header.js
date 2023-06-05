import { AuthContext } from "@/context/AuthContext";
import { CardContext } from "@/context/CardContext";
import { default as styles, default as sytles } from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
import "tailwindcss/tailwind.css";
import logo from "../img/logo.png";
import MobileNav from "./MobileNav/MobileNav";

export default function Header() {
  const { user, signOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const updateOpen = () => {
    setOpen(false);
  };

  const { cart } = useContext(CardContext);

  const menuItmes = (
    <>
      <ul className=" capitalize text-sm flex space-x-3 p-3 ">
        <li className="border-r border-white pr-2">
          <Link href={"/"}>home</Link>
        </li>

        <li className="border-r border-white pr-2">
          <Link href={"/shop"}>Products</Link>
        </li>
        <li className="border-r border-white pr-2">
          <Link href={"/aboutus"}>about</Link>
        </li>
        <li className="border-white border-r pr-2">
          <Link href={"/faq"}>help & faq</Link>
        </li>
        <li>
          <Link href={"/contacts"}>Contact Us</Link>
        </li>
      </ul>
      <ul className="   capitalize text-sm flex space-x-3 p-3 ">
        {user ? (
          <>
            <li className="pr-3 bg-white text-black px-2   font-bold rounded-sm">
              <Link href={"/"} onClick={signOut}>
                Sing Out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="border-r border-white pr-3">
              <Link href={"/signin"}>Sing In</Link>
            </li>
            <li>
              <Link href={"/signup"}>Create Account</Link>
            </li>
          </>
        )}
      </ul>
    </>
  );

  return (
    <>
      <MobileNav open={open} setOpen={updateOpen} />

      <header className="sticky top-0   md:static   z-10">
        <div className="header-sm md:hidden  shadow-sm   bg-white   p-4">
          <div className="container mx-auto flex  justify-between">
            <div className="header-left flex items-center   space-x-2">
              <div>
                <HiOutlineMenuAlt1
                  className=" text-[2rem] cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              </div>
              <div className="logo"></div>
              <Link href={"/"}>
                <Image src={logo} width="130" height="130" alt="logo" />
              </Link>
            </div>
            <div className="header-right flex items-center space-x-2">
              <div className="search cursor-pointer">
                <GoSearch className="text-[1.5rem]" />
              </div>
              <div
                className={`cart pl-5 ${sytles.cart} relative cursor-pointer `}
              >
                <Link href={`/shopping`}>
                  <RiShoppingCartLine />
                  <span className="count text-[11px]  text-white  font-bold absolute top-0 right-[7px] px-1 rounded-full bg-primary">
                    {/* {cart.length} */}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="header text-white  hidden md:block ">
          <nav className="header-top bg-black  ">
            <div className=" container  mx-auto">
              <div className="flex justify-between">{menuItmes}</div>
            </div>
          </nav>
          <div className="header-main p-4 shadow-sm ">
            <div className="content container mx-auto flex   justify-between align-middle">
              <div className="logo-box cursor-pointer">
                <Link href={"/"}>
                  <Image src={logo} width="200" height="200" alt="logo" />
                </Link>
              </div>
              <div className="search-box  text-black  flex space-x-9">
                <div className="max-w-md mx-auto">
                  <div className="relative flex items-center w-full h-12 rounded-lg shadow-md border bg-white overflow-hidden">
                    <input
                      className={`input outline-none pl-3 border-none
                    focus:outline-none w-64 ${styles.input}`}
                      type="search"
                      id="search"
                      placeholder="Search"
                    />
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center  items-center">
                  <div className="contact-box  cursor-pointer  border-r pr-5 border-softGray">
                    <div className="flex justify-center items-center">
                      <div className={`${sytles.icon} pr-1`}>
                        <BiPhoneCall />
                      </div>
                      <div className="phone uppercase hidden lg:block">
                        <h5>call us now</h5>
                        <h5 className="font-bold  ">929 217-6589</h5>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`cart pl-5 ${sytles.cart} relative cursor-pointer `}
                  >
                    <Link href={`/shopping`}>
                      <RiShoppingCartLine />
                      <span className="count text-[11px]  text-white  font-bold absolute top-0 right-[7px] px-1 rounded-full bg-primary">
                        {cart?.length}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
