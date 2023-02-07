import { CollegeLogo, Footer, PageHead } from "components";
import { Club } from "components/clubs";
import { Clubs } from "data/debugClubs";
import React from "react";

export default function Events() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center max-w-2xl min-h-screen p-4 m-auto text-white font-main">
        <CollegeLogo />
        <h2 className="my-12 font-bold text-center lg:text-4xl sm:text-3xl font-title">
          Events
        </h2>
        <h2 className="mb-8 font-bold text-center lg:text-4xl sm:text-2xl">
          All events for SSN Instincts are powered by our different clubs, do
          check them out!
        </h2>
        <div className="p-4 text-xl rounded-br-3xl grid grid-cols-1 lg:grid-cols-3 gap-10 w-[90vw] md:grid-cols-2">
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
      <Footer />
    </>
  );
}
