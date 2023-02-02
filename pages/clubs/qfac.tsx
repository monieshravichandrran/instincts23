import { CollegeLogo, Footer, PageHead, Events } from "components"
import { debugEvents } from "data/debugEvents"

export default function Elc() {
  
  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        <Events clubName={"Q Factorial - Quiz club"} eventDetails={debugEvents.qfac}/>
      </div>
      <Footer />
    </>
  )
}
