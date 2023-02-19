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
      <div className="shadow-2xl relative p-2vw w-full h-70vh lg:w-[25vw] md:w-[36vw]lg:p-[5vw] sm:p-[2vw]">
        <Image
          src={"/images/clubs/" + imageSource}
          alt={alternate}
          width={244}
          height={244}
          className="mb-4 mx-auto p-8 lg:p-8 w-[80vw] h-[80vw] sm:w-[75vw] sm:h-[75vw] md:w-[35vw] md:h-[35vw] lg:w-[23vw] lg:h-[23vw]"
        />
        <h2 className="mb-4 text-3xl font-bold text-center font-title">
          {clubName}
        </h2>
        <p className="py-5 mb-20 text-lg font-black text-center md:text-xl">
          {description}
        </p>
        <div className="flex absolute right-10 bottom-0  my-4 mt-10" >
          <Button href={link} large>
            Explore
          </Button>
        </div>
      </div>
    </>
  );
};
