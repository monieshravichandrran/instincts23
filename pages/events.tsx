import { CollegeLogo, Footer, PageHead } from "components";
import { Club } from "components/clubs";
import { Clubs } from "data/debugClubs";
import React from "react";
import Script from "next/script";

export default function Events() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <h2 className="mt-12 mb-2 font-bold text-center lg:text-4xl sm:text-3xl font-title">
          Events
        </h2>
        <h2 className="mb-8 font-bold text-center lg:text-4xl sm:text-2xl">
          All events for SSN SNUC Instincts are powered by our different clubs,
          do check them out!
        </h2>
        <div
          id="container"
          className="justify-center min-w-[96vw] flex md:min-w-[85vw]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] text-xl rounded-br-3xl w-full">
            {Clubs.map((item, index) => (
              <Club
                key={index}
                imageSource={item.imageSource}
                alternate={item.alternate}
                clubName={item.clubName}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <Script src="controller.js" />
    </>
  );
}
