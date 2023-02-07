import { CollegeLogo, Events, Footer, PageHead } from "components";
import { debugEvents } from "data/debugEvents";

export default function Elc() {
  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        <Events
          clubName={"Gradient - SSN Design Club"}
          eventDetails={debugEvents.sdc}
        />
      </div>
      <Footer />
    </>
  );
}
