import { InstagramLogo } from "phosphor-react";
import React from "react";

const footerTextElement = "</>";

export const Footer = () => {
  return (
    <footer className="h-auto w-full py-4 flex flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/50 rounded-md lg:rounded-xl backdrop-blur-lg text-white font-main text-center">
      <p className="mb-4 text-3xl">Instincts 2023 - Lost Continent</p>
      <p className="text-xl">SSN & SNUC&apos;s Annual Cultural Fest</p>
      <p className="text-xl">All rights reserved &copy; <a target="_blank" href="https://www.ssn.edu.in/">SSN</a> <a target="_blank" href="https://www.snuchennai.edu.in/">SNUC</a></p>
      <a
        className="mt-2 duration-300 hover:scale-125"
        href="https://www.instagram.com/ssnsnucinstincts/"
        rel="noopener noreferrer"
      >
        <InstagramLogo size={32} />
      </a>
      <p className="mt-6 text-lg">{footerTextElement} With ❤️ by</p>
      <div className="flex items-center mt-6">
        <a target="_blank" href="https://www.linkedin.com/in/judahjacinth/">
          <img
            className="w-[5.5rem] h-[5.5rem] lg:w-[6.5rem] lg:h-[6.5rem] duration-300 cursor-pointer hover:scale-125 lg:ml-10"
            src="/images/Judah.png"
            alt="Judah"
          />
        </a>
      <a href="https://www.instagram.com/akash._.77/">
          <img
            className="w-[5.5rem] h-[5.5rem] lg:w-[6.5rem] lg:h-[6.5rem] duration-300 cursor-pointer hover:scale-125 lg:ml-10"
            src="/images/akash.png"
            alt="akash"
          />
        </a>
        <a href="https://www.instagram.com/iammoniesh208/">
          <img
            className="w-[5.5rem] h-[5.5rem] lg:w-[7rem] lg:h-[7rem] duration-300 cursor-pointer hover:scale-125 lg:ml-10"
            src="/images/moniesh.png"
            alt="Moniesh"
          />
        </a>
        <a href="https://twitter.com/Amanrk28">
          <img
            className="w-[7rem] h-[7rem] lg:w-[8.5rem] lg:h-[8.5rem] duration-300 cursor-pointer hover:scale-125 lg:ml-10"
            src="/images/aman.png"
            alt="Aman Khemka"
          />
        </a>
        <a href="https://www.instagram.com/charumathip21/">
          <img
            className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] duration-300 cursor-pointer hover:scale-125 lg:ml-10"
            src="/images/charu.png"
            alt="Moniesh"
          />
        </a>
      </div>
    </footer>
  );
};
