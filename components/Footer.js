import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function FooterNew() {
  return (
    <footer className="  shadow-md   py-[2.5rem] text-gray-700 bg-[#f5f7fa]">
      <div className="container mx-auto   ">
        <div
          className="px-6 grid  justify-items-center md:justify-items-center text-center md:text-left
        
        gap-y-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        >
      

          <div className="info">
            <h3 className="info-title text-[25px] font-bold  capitalize">
              Information
            </h3>
            <ul className=" capitalize mt-2">
              <li className="mb-2">Help center</li>
              <li className="mb-2">Shiping</li>
              <li className="mb-2">Return</li>
              <li className="mb-2">Polcies</li>
              <li className="mb-2">Gift card</li>
            </ul>
          </div>

          <div className="info">
            <h3 className="info-title text-[25px] font-bold capitalize">
              About Us
            </h3>
            <ul className=" capitalize mt-3">
              <li className="mb-2">Our Story</li>
              <li className="mb-2">Contact</li>
              <li className="mb-2">Affiliate Program</li>
              <li className="mb-2">Referral Program</li>
              <li className="mb-2">Career</li>
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

          <Link href={"#head"}>
            <button className="text-[#7000fe] mt-3">Back to top</button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
