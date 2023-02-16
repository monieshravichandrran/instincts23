import { Button } from "components/button";
import Image from "next/image";
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
      <div className="shadow-2xl w-70vw  lg:w-[25vw] md:w-[36vw]lg:p-[5vw] sm:p-[2vw]">
        <Image
          src={"/images/clubs/" + imageSource}
          alt={alternate}
          className="mb-[4rem] mx-auto p-8 lg:p-8 w-[90vw] h-[90vw] sm:w-[85vw] sm:h-[85vw] md:w-[35vw] md:h-[35vw] lg:w-[23vw] lg:h-[23vw]"
        />
        <h2 className="mb-4 text-3xl font-bold text-center font-title">
          {clubName}
        </h2>
        <p className="my-10 text-lg font-black text-center md:text-xl">
          {description}
        </p>
        <div className="flex justify-center mb-4">
          <Button href={link} large>
            Explore
          </Button>
        </div>
      </div>
    </>
  );
};
