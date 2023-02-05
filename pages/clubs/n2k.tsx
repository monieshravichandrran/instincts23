import { CollegeLogo, Footer, PageHead, Events } from "components"
import { debugEvents } from "data/debugEvents";
import { ComingSoon } from "components";

export default function N2k() {

  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.n2k?.length > 0 ?
          <Events clubName={"N2K - Western Dance Crew"} eventDetails={debugEvents.n2k} />
          : <ComingSoon />}
      </div>
      <Footer />
    </>
  )
}
