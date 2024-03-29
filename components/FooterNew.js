import { HiHome } from "react-icons/hi";
import Link from "next/link";
import { BsTelephoneForwardFill, BsFacebook } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function FooterNew() {
  return (
    <footer className="  shadow-md   py-[2.5rem] text-gray-700 bg-[#f5f7fa]">
      <div className="container mx-auto   ">
        <div className="px-6 grid  justify-items-center md:justify-items-start text-center md:text-left  gap-y-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <div className="info">
            <h3 className="info-title text-[25px] font-bold capitalize">
              information
            </h3>
            <ul className=" capitalize mt-2">
              <li className="mb-2">Nprintandgraph companie </li>

              <li className="mb-2  lowercase">
                From NEW PRINT AND GRAPH "BANNERS, STICKERS, TABLE CLOTHES,
                FLAGS, BACK DROPS, SWIFT BANNERS, STEP AND REPEAT, DECALS,
                BUSINESS CARDS, MENU CARDS"
              </li>
              {/* <li className="mb-2">929 217-6589</li> */}
            </ul>

            <div className="mt-5 md:mt-8 ">
              <ul className=" text-capilalize flex space-x-4">
                <li className="p-3 rounded-full border cursor-pointer">
                  <AiOutlineTwitter className="text-[1.2rem] cursor-pointer" />
                </li>
                <li className="p-3 rounded-full border cursor-pointer">
                  <BsFacebook className="text-[1.2rem]" />
                </li>
                <li className="p-3 rounded-full border">
                  <AiFillInstagram className="text-[1.2rem] cursor-pointer" />
                </li>

                <li className="p-3 rounded-full border cursor-pointer">
                  <FaLinkedin className="text-[1.2rem]" />
                </li>
              </ul>
            </div>
          </div>
          <div className="info">
            <h3 className="info-title text-[25px] font-bold capitalize">
              Get In Touch
            </h3>
            <ul className=" capitalize mt-2">
              <li className="mb-2">13220 Jamaica Ave, Queens, NY 11418`</li>

              <li className="mb-2">nprintandgraph@gmail.com</li>
              <li className="mb-2">929 217-6589</li>
            </ul>
          </div>

          <div className="info">
            <h3 className="info-title text-[25px] font-bold  capitalize">
              Useful Links
            </h3>
            <ul className=" capitalize mt-2">
              {/* <li className="mb-2">My Account</li> */}
              {/* <li className="mb-2">Order tracking</li> */}
              <li className="mb-2 cursor-pointer">
                <Link href={`/contacts`}>Blog</Link>
              </li>

              <li className="mb-2">
                <Link href={`/shop`}> All Product</Link>
              </li>
              <li className="mb-2">
                <Link href={`/shop`}>All Service</Link>
              </li>
              <li className="mb-2 cursor-pointer">
                <Link href={`/contacts`}>Help Center</Link>
              </li>
              {/* <li className="mb-2">Service Details</li> */}
            </ul>
          </div>
          <div className="info">
            <h3 className="info-title text-[25px] font-bold capitalize">
              Get Started
            </h3>

            <ul className=" capitalize mt-3">
              <li className="mb-2 cursor-pointer">
                <Link href={`/contacts`}>Privacy Policy </Link>
              </li>
              <li className="mb-2 cursor-pointer">
                <Link href={`/contacts`}>Terms and Conditions</Link>
              </li>
              <li className="mb-2 cursor-pointer">
                <Link href={`/contacts`}>Refund Policy</Link>
              </li>
              <li className="mb-2 cursor-pointer">
                <Link href={`/contacts`}>Shipping Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy  mt-10 pt-8 border-t border-t-blue-gray-100 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-800 mt-3">
            ©2023 Print & Graph. All rights reserved
          </p>
          <div className="mt-2">
            <img
              src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/payment.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
