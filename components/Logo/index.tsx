/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const CollegeLogo = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="">
        <img
          src="/images/SNUC-white.png"
          alt="SNUC"
          className="w-[100px] lg:w-[180px] absolute top-5 left-5"
        />

        <div className="absolute text-white top-3 right-3 sm:text-xl md:text-2xl">
          <Link
            href="/events"
            className="inline-block mx-4 md:mx-10 hover:font-black hover:shadow-2xl hover:scale-110 sm:hidden"
          >
            Events
          </Link>
          <Link
            href="/about"
            className="inline-block mx-4 md:mx-10 hover:font-black hover:shadow-2xl hover:scale-110 sm:hidden"
          >
            About
          </Link>
          <img
            src="/images/SSN-white.png"
            alt="SSN"
            className="inline-block w-[70px] lg:w-[120px] sm:mr-14"
          />
        </div>
      </div>
      <div
        className="absolute cursor-pointer md:hidden lg:hidden top-3 right-5"
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
              className="p-3 bg-white rounded-full shadow-lg cursor-pointer shadow-gray-800 "
            >
              <AiOutlineClose color="black" />
            </div>
          </div>
          <div className="my-4 border-b border-gray-300"></div>
          <div className="flex-col py-4">
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
