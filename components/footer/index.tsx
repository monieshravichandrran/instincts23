import React from "react";
var footer_text_element = "</>";

export const Footer = () => {
  return (
    <footer className="h-80 w-full flex flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg text-white font-main">
      <p className="text-3xl">Instincts 2023 - Lost Continent</p>
      <p className="text-lg">SSN and SNUC&apos;s Annual Cultural Fest</p>
      <p className="text-lg">All rights reserved © SSN SNUC</p>
      <p className="mt-6 text-lg">{footer_text_element} With ❤️ by</p>
      <div className="flex items-center gap-4 mt-5">
        <a href="https://twitter.com/Amanrk28">
          <img
            className="w-20 h-20 duration-300 cursor-pointer hover:scale-125"
            src="/images/aman.png"
            alt="Aman Khemka"
          />
        </a>
      </div>
    </footer>
  );
};
