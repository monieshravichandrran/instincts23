import { InstagramLogo } from "phosphor-react";
import React from "react";

const footerTextElement = "</>";

export const Footer = () => {
  return (
    <footer className="h-auto w-full py-4 flex flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/50 rounded-md lg:rounded-xl backdrop-blur-lg text-white font-main text-center">
      <p className="mb-4 text-3xl">Instincts 2023 - Lost Continent</p>
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
      <div className="flex items-center mt-24">
      <a href="">
          <img
            className="w-[7rem] h-[7rem] duration-300 cursor-pointer hover:scale-125 relative lg:ml-10 -rotate-[20deg]"
            src="/images/akash.png"
            alt="akash"
          />
        </a>
        <a href="https://www.instagram.com/iammoniesh208/">
          <img
            className="w-[7rem] h-[7rem] duration-300 cursor-pointer hover:scale-125 relative bottom-24 lg:ml-10"
            src="/images/moniesh.png"
            alt="Moniesh"
          />
        </a>
        <a href="https://twitter.com/Amanrk28">
          <img
            className="w-[8.2rem] h-[8.2rem] duration-300 cursor-pointer hover:scale-125 relative bottom-24 lg:ml-10"
            src="/images/aman.png"
            alt="Aman Khemka"
          />
        </a>
        <a href="">
          <img
            className="w-[7rem] h-[7rem] duration-300 cursor-pointer hover:scale-125 relative lg:ml-10 rotate-[20deg]"
            src="/images/charu.png"
            alt="Moniesh"
          />
        </a>
      </div>
    </footer>
  );
};
