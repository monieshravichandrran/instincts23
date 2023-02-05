import { CollegeLogo, Footer, PageHead, Events } from "components"
import { debugEvents } from "data/debugEvents";
import { ComingSoon } from "components";
export default function Elc() {

  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.lop?.length>0 ?
        <Events clubName={"Lights out Please - Theatre Club"} eventDetails={debugEvents.lop} />
        : <ComingSoon /> }
      </div>
      <Footer />
    </>
  )
}
