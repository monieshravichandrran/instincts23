import { CollegeLogo, Events, Footer, PageHead } from "components";
import { ComingSoon } from "components";
import { debugEvents } from "data/debugEvents";

export default function Arudhra() {
  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.arudhra?.events?.length > 0 ? (
          <Events
            clubName={"Arudhra - Classical Dance Team"}
            eventDetails={debugEvents.arudhra}
          />
        ) : (
          <ComingSoon />
        )}
      </div>
      <Footer />
    </>
  );
}
