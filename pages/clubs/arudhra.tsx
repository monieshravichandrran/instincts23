import { CollegeLogo, Footer, PageHead, Events } from "components"
import { debugEvents } from "data/debugEvents";
import { ComingSoon } from "components";

export default function Arudhra() {

  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.arudhra?.length > 0 ?
          <Events clubName={"Arudhra - Classical Dance Team"} eventDetails={debugEvents.arudhra} />
          : <ComingSoon />}
      </div>
      <Footer />
    </>
  )
}
