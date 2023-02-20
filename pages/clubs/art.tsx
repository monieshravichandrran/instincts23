import { CollegeLogo, Events, Footer, PageHead } from "components";
import { ComingSoon } from "components";
import { debugEvents } from "data/debugEvents";

export default function Handila() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.handila?.events.length > 0 ? (
          <Events
            clubName={"Handila(SNUC Art Club)"}
            eventDetails={debugEvents.handila}
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
