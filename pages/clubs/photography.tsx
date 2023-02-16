import { CollegeLogo, Events, Footer, PageHead } from "components";
import { ComingSoon } from "components";
import { debugEvents } from "data/debugEvents";

export default function Elc() {
  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.spc?.events.length > 0 ? (
          <Events
            clubName={"SSN Photography Club"}
            eventDetails={debugEvents.spc}
          />
        ) : (
          <ComingSoon />
        )}
      </div>
      <Footer />
    </>
  );
}
