import { CollegeLogo, Footer, PageHead } from "components";
import { Club } from "components/clubs";
import { Clubs } from "data/debugClubs";
import React from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Events() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <h2 className="mt-20 mb-2 font-bold text-center lg:text-4xl sm:text-3xl font-title">
          Pro Shows
        </h2>
        <div
          id="container"
          className="justify-center min-w-[96vw] flex md:min-w-[85vw] my-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] text-xl rounded-br-3xl w-full">
            <div className="shadow-2xl w-full  clubimage">
              <Image
                src={"/images/proshows/dj.jpg"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[40vw] sm:h-[40vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
              <h2 className="mb-4 text-3xl font-bold text-center font-title">
                DJ Night
              </h2>
            </div>
            <div className="shadow-2xl w-full  clubimage mb-4">
              <Image
                src={"/images/proshows/celeb.jpg"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[40vw] sm:h-[40vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
              <h2 className="mb-4 text-3xl font-bold text-center font-title">
                Celebrity Variety Show
              </h2>
              <div className="w-full flex justify-center mb-5">
              <a href={"https://docs.google.com/forms/d/e/1FAIpQLSe7p7Owg9dOii-bBW3L4KWz5iNpgFotK8yK42r5Xseou4W-rg/viewform?usp=sf_link"}>
                <button
                  className="neon-button mt-10 !text-white"
                >
                  Register
                </button>
              </a>
              </div>
            </div>
            <div className="shadow-2xl w-full  clubimage">
              <img
                src={"/images/proshows/pro0.jpg"}
                alt={""}
                id="pro"
                width={244}
                height={244}
                className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[40vw] sm:h-[40vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
              <h2 className="mb-4 text-3xl font-bold text-center font-title">
                Pro Show
              </h2>
            </div>
            <div className="shadow-2xl w-full  clubimage">
              <Image
                src={"/images/proshows/bike.jpg"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[40vw] sm:h-[40vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
              <h2 className="mb-4 text-3xl font-bold text-center font-title">
                Bike Stunt
              </h2>
            </div>
            <div className="shadow-2xl w-full  clubimage">
              <Image
                src={"/images/proshows/choreo.jpg"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[40vw] sm:h-[40vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
              <h2 className="mb-4 text-3xl font-bold text-center font-title">
                Choreo Night
              </h2>
              <div className="w-full flex justify-center">
              <a href={"https://docs.google.com/forms/d/e/1FAIpQLSd6VMVgwUaCjgGdWigws5g_cfof_gev03GoQSTbgrYjvgMrgw/viewform?embedded=true"}>
                <button
                  className="neon-button mt-10 !text-white"
                >
                  Register
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Script src="imagechanges.js">
      </Script>
    </>
  );
}
