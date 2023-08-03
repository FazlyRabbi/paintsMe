import { Card, CardBody } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";

export default function MobileNav({ open, setOpen }) {
  const [height, setHeight] = useState(false);

  return (
    <div
      className={`mobile__menu md:hidden overflow-y-auto z-30  fixed top-0  
      transition-all duration-300 w-full 
     ${open ? "left-0" : "-left-[100rem]"}
     
     `}
    >
      <Card className=" bg-black     !rounded-sm   min-h-[100vh]">
        <CardBody>
          <div className="products mt-14 w-[90%]    duration-500 font-bold capitalize">
            <ul onClick={() => setHeight(!height)}>
              <li
                className=" products
              p-2   bg-primary
         
              rounded-md text-white "
              >
                <Link href={`#`} className="flex justify-between">
                  Products
                  {height ? (
                    <BiChevronUp className="text-[1.5rem] text-white" />
                  ) : (
                    <BiChevronDown className="text-[1.5rem] text-white" />
                  )}
                </Link>

                {/* dropdown manu */}
                <ul
                  className={`opacity-0 
                  snap-both
                  overflow-y-scroll
                  
                  ${height ? "h-[20rem]  opacity-100 mt-2 " : "h-0"} `}
                >
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                </ul>
              </li>
              <li
                className=" products
              p-2   bg-primary
          mt-3
              rounded-md text-white "
              >
                <Link href={`#`} className="flex justify-between">
                  Login/Registration
                  {height ? (
                    <BiChevronUp className="text-[1.5rem] text-white" />
                  ) : (
                    <BiChevronDown className="text-[1.5rem] text-white" />
                  )}
                </Link>

                {/* dropdown manu */}
                <ul
                  className={`opacity-0 
                 
                  overflow-y-scroll
                  
                  ${height ? "h-[9rem]  opacity-100 mt-2 " : "h-0"} `}
                >
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                  <li className="py-2 bg-[#da4186] mb-2 px-2 rounded-md">
                    {" "}
                    <Link href={`#`}>a</Link>
                  </li>
                </ul>
              </li>
              <li
                className=" products
              p-2   
          mt-3
              rounded-md text-white "
              >
                <Link href={`#`} className="flex justify-between">
                  About
                </Link>
              </li>
              <li
                className=" products
              p-2   
          mt-3
              rounded-md text-white "
              >
                <Link href={`#`} className="flex justify-between">
                  About
                </Link>
              </li>
              <li
                className=" products
              p-2   
          mt-3
              rounded-md text-white "
              >
                <Link href={`#`} className="flex justify-between">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
      <TiDeleteOutline
        className="text-white text-[2rem]   top-3 absolute right-3 cursor-pointer"
        onClick={() => setOpen()}
      />
    </div>
  );
}
