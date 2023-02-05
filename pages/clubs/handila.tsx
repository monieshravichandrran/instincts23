import { CollegeLogo, Footer, PageHead, Events } from "components"
import { debugEvents } from "data/debugEvents";
import { ComingSoon } from "components";

export default function Handila() {

  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.handila?.length > 0 ?
          <Events clubName={"Handila(SNUC Art Club)"} eventDetails={debugEvents.handila} />
          : <ComingSoon />}
      </div>
      <Footer />
    </>
  )
}
