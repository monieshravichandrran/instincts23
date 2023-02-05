import { CollegeLogo, Footer, PageHead, Events } from "components"
import { debugEvents } from "data/debugEvents";
import { ComingSoon } from "components";

export default function Gaming() {

  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.gaming?.length > 0 ?
          <Events clubName={"SSN Gaming Club"} eventDetails={debugEvents.gaming} />
          : <ComingSoon />}
      </div>
      <Footer />
    </>
  )
}
