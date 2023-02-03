import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const CollegeLogo = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="hidden md:flex">
        <img
          src="/images/SNUC-white.png"
          alt="SNUC"
          className="w-[100px] lg:w-[180px] absolute top-5 left-5"
        />
        <div className="inline-block absolute top-3 text-white right-3 sm:text-xl md:text-2xl">
          <Link
            href="/events"
            className="inline-block mx-4 md:mx-10 hover:font-black hover:shadow-2xl hover:scale-110"
          >
            Events
          </Link>
          <Link
            href="/about"
            className="inline-block mx-4 md:mx-10 hover:font-black hover:shadow-2xl hover:scale-110"
          >
            About
          </Link>
          <img
            src="/images/SSN-white.png"
            alt="SSN"
            className="inline-block w-[70px] lg:w-[120px]"
          />
        </div>
      </div>
      <div
        className="md:hidden lg:hidden cursor-pointer absolute top-5 right-5"
        onClick={() => setNav(!nav)}
      >
        <AiOutlineMenu size={30} color="white" />
      </div>
      <div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-b from-[#ae8141] to-gray-800 bg-blend-color-dodge p-10 ease-in duration-500 "
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-b from-[#ae8141] to-gray-800 bg-blend-color-dodge p-10 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center justify-between">
              <img
                src="/images/SNUC-white.png"
                alt="SNUC"
                className="w-[100px] mb-10"
              />
              <img src="/images/SSN-white.png" alt="SSN" className="w-[70px]" />
            </div>
            <div
              onClick={() => setNav(!nav)}
              className="rounded-full shadow-lg bg-white shadow-gray-800 p-3 cursor-pointer "
            >
              <AiOutlineClose color="black" />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4"></div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href="/events">
                <li
                  className="py-4 font-medium text-white"
                  onClick={() => setNav(false)}
                >
                  Events
                </li>
              </Link>
              <Link href="/about">
                <li
                  className="py-4 font-medium text-white"
                  onClick={() => setNav(false)}
                >
                  About
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
