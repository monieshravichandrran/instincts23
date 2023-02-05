import { CollegeLogo, Footer, PageHead, Events } from "components"
import { debugEvents } from "data/debugEvents";
import { ComingSoon } from "components";

export default function Talents() {

  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.talents?.length > 0 ?
          <Events clubName={"Student Variety Show"} eventDetails={debugEvents.talents} />
          : <ComingSoon />}
      </div>
      <Footer />
    </>
  )
}
