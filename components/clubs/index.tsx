import { Button } from "components/button";
import Image from "next/image";
import Script from "next/script";
import React from "react";

type Children = {
  imageSource: string;
  alternate: string;
  clubName: string;
  description: string;
  link: string;
};

export const Club = ({
  imageSource,
  alternate,
  clubName,
  description,
  link,
}: Children) => {
  return (
    <>
      <div data-text="SSN SNUC INSTINCTS" className="item shadow-2xl w-full">
        <Image
          src={"/images/clubs/" + imageSource}
          alt={alternate}
          width={244}
          height={244}
          className="mb-4 mx-auto p-8 lg:p-8 w-[80vw] h-[80vw] sm:w-[75vw] sm:h-[75vw] md:w-[35vw] md:h-[35vw] lg:w-[23vw] lg:h-[23vw]"
        />
        <h2 className="content-title mb-4 text-3xl font-bold text-center font-title">
          {clubName}
        </h2>
        <p className="content-desc py-5 mb-20 text-lg font-black text-center md:text-xl">
          {description}
        </p>
        <div className="flex justify-center" >
          <Button href={link} large>
            Explore
          </Button>
        </div>
      </div>
      <Script src="controller.js" />
    </>
  );
};
