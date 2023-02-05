import Link from "next/link";
import { InstagramLogo } from "phosphor-react";
import React from "react";

const footerTextElement = "</>";

export const Footer = () => {
  return (
    <footer className="h-80 w-full flex flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg text-white font-main text-center">
      <Link
        href="/about"
        className="underline duration-300 hover:scale-110 underline-offset-4"
      >
        <p className="mb-4 text-3xl">Instincts 2023 - Lost Continent</p>
      </Link>
      <p className="text-xl">SSN & SNUC&apos;s Annual Cultural Fest</p>
      <p className="text-xl">All rights reserved &copy; SSN SNUC</p>
      <a
        className="mt-2 duration-300 hover:scale-125"
        href="https://www.instagram.com/ssnsnucinstincts/"
        rel="noopener noreferrer"
      >
        <InstagramLogo size={32} />
      </a>
      <p className="mt-6 text-lg">{footerTextElement} With ❤️ by</p>
      <div className="flex items-center gap-4 mt-5">
        <a href="https://www.instagram.com/iammoniesh208/">
          <img
            className="w-[6.5rem] h-[6.5rem] duration-300 cursor-pointer hover:scale-125"
            src="/images/moniesh.png"
            alt="Moniesh"
          />
          <p className="ml-[-1.5rem] font-title text-large text-white font-body">Moniesh Ravichandran</p>
        </a>
        <a href="https://twitter.com/Amanrk28">
          <img
            className="mt-2 w-24 h-24 duration-300 cursor-pointer hover:scale-125"
            src="/images/aman.png"
            alt="Aman Khemka"
          />
          <p className="font-title text-large text-white font-body">Aman Khemka</p>
        </a>
      </div>
    </footer>
  );
};
