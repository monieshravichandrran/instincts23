import React from "react";
import { CollegeLogo, Footer, PageHead } from "components";
import { Clubs } from "data/debugClubs";
import { Club } from "components/clubs";

export default function Events() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center max-w-2xl min-h-screen p-4 m-auto text-white font-main">
        <CollegeLogo />
        <h2 className="my-12 lg:text-4xl sm:text-3xl font-bold text-center lg:text-6xl font-title">
          Events
        </h2>
        <h2 className="mb-8 lg:text-4xl sm:text-2xl font-bold text-center">
            All events for SSN Instincts are powered by our different clubs, do check them out!
        </h2>
        <div className="p-4 text-xl shadow-2xl rounded-br-3xl grid lg:grid-cols-3 gap-10 w-[90vw] sm:grid-cols-2">
          {Clubs.map((item,index) => ( 
            <Club
              key={index}
              imageSource={item.imageSource}
              alternate={item.alternate}
              clubName={item.clubName}
              description={item.description}
              link={item.link}
            />
          ))
          }
        </div>
      </div>
      <Footer />
    </>
  );
}
