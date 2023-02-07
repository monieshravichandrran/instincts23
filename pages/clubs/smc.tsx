import { CollegeLogo, Events, Footer, PageHead } from "components";
import { ComingSoon } from "components";
import { debugEvents } from "data/debugEvents";

export default function Elc() {
  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.smc?.length > 0 ? (
          <Events clubName={"SSN Music Club"} eventDetails={debugEvents.smc} />
        ) : (
          <ComingSoon />
        )}
      </div>
      <Footer />
    </>
  );
}
