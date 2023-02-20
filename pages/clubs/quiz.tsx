import { CollegeLogo, Events, Footer, PageHead } from "components";
import { ComingSoon } from "components";
import { debugEvents } from "data/debugEvents";

export default function Elc() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="min-h-screen lg:w-[98%] sm:w-full">
          {debugEvents.qfac?.events.length > 0 ? (
            <Events
              clubName={"Q Factorial - Quiz club"}
              eventDetails={debugEvents.qfac}
            />
          ) : (
            <ComingSoon />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
