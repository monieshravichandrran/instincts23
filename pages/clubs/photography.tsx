import { CollegeLogo, Events, Footer, PageHead } from "components";
import { ComingSoon } from "components";
import { debugEvents } from "data/debugEvents";

export default function Elc() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="min-h-screen lg:w-[98%] sm:w-full">
          {debugEvents.spc?.events.length > 0 ? (
            <Events
              clubName={"SSN Photography Club"}
              eventDetails={debugEvents.spc}
              decor={<><p className="my-2">Participate in discussions, engage with fellow enthusiasts, and learn from the experts in our exclusive talk show. Listen and learn as leading professionals of the industry share their experiences and stories behind their work.</p>
                <p className="mb-10">Let Experts Talk is the sixth edition of an exclusive summit wherein Photographers from the industry share their processes and insights as an engaging event for aspiring photographers to attend. Students currently enrolled in any college are invited to attend this event.</p>

                <p><b className="font-title mb-10">Registration Details:</b> Included in club pass of Rs. 100/-</p>

                <h2 className="font-title mt-4">Event Highlights:</h2>
                <p className="mb-10">Live talk by the speakers and insights about their thought process.
                Opportunity to engage and network with similar minds.
                Interacting with speakers from the industry.</p>

                <h2 className="my-2 font-title">Keynote Speaker: Bhavanandhi Babulal</h2>
                <p className="mb-10">A man with immense love for the cosmos, the night sky and the marvels that lie beyond, Bhavanandhi quit his job back in 2019 to pursue his lifelong dream and one true passion: to chase the stars.
                He began to travel all across India, starting off with a 16-day round trip spanning from Chennai to Jaisalmer, covering 10 Indian states and roughly 7000 km. He explored and has adventured to the islands of Andaman and Nicobar, Poombarai, Rajasthan, Indonesia and much more, meeting new people and understanding their culture along the way. Now, he has his own startup called 'starvoirs' where him and his team organise stargazing trips to places with minimal light pollution. A true bibliophile and a Pink Floyd stan, we contain immense pleasure and are much honoured to host him here at SSN SNUC Instincts.</p>
              </>}
            />
          ) : (
            <ComingSoon />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
