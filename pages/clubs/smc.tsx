import { CollegeLogo, Footer, PageHead, Events } from "components"
import { debugEvents } from "data/debugEvents"
import { ComingSoon } from "components"

export default function Elc() {
  
  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        {debugEvents.smc?.length > 0 ? 
        <Events clubName={"SSN Music Club"} eventDetails={debugEvents.smc}/>
        : <ComingSoon /> }
      </div>
      <Footer />
    </>
  )
}
