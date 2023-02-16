import { CollegeLogo, Events, Footer, PageHead } from "components";
import { ComingSoon } from "components";
import { debugEvents } from "data/debugEvents";

export default function Business() {
  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.business?.events.length > 0 ? (
          <Events
            clubName={"The SNUC Business Club"}
            eventDetails={debugEvents.business}
          />
        ) : (
          <ComingSoon />
        )}
      </div>
      <Footer />
    </>
  );
}
