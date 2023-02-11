import { CollegeLogo, Events, Footer, PageHead } from "components";
import { debugEvents } from "data/debugEvents";

export default function Elc() {
  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {/* <div className="w-full mt-10 flex justify-center">
          <div className="mb-[4rem] mx-auto p-4 lg:p-8">
            <Image
              src={"/images/clubs/elc.jpeg"}
              alt={"elc"}
              height={300}
              width={300}
              className=""
            />
            <h1 className="mt-3 font-title text-white align-center text-center text-2xl">SSN Literary Club</h1>
          </div>
          <div className="mb-[4rem] mx-auto p-4 lg:p-8">
            <Image
              src={"/images/clubs/lop.png"}
              alt={"lop"}
              height={600}
              width={600}
              className=""
            />
            <h1 className="mt-3 font-title text-white align-center text-center text-2xl">SNU Literary Club</h1>
          </div>
        </div> */}
        <Events
          clubName={"English Literary Club"}
          eventDetails={debugEvents.elc}
        />
      </div>
      <Footer />
    </>
  );
}
