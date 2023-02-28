import { CollegeLogo, Events, Footer, PageHead } from "components";
import { debugEvents } from "data/debugEvents";

export default function Elc() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="min-h-screen lg:w-[98%] sm:w-full">
          <Events
            clubName={"Gradient - SSN Design Club"}
            eventDetails={debugEvents.sdc}
            decor={
              <>
                <p className="text-lg text-justify  white font-body md:text-xl">Ready to put your vibe into your design? Go, grab your friends, and form a team! Choose a track and a topic to come up with a design using any design tool. The lone wolves too need not worry, as we do accept individual registrations as well. The list of topics pertaining to the track chosen will be given on the spot. The best works will be awarded cash prizes based on how well the idea is expressed and designed; perhaps design internships will be available as well, tsk tsk</p>
                <h3 className="mt-5 mb-4 text-2xl font-bold text-left text-white font-title">TRACK 1 LOGO REVAMP</h3>
                <p className="text-lg text-justify  white font-body md:text-xl">A logo revamp symbolizes the evolution of a brand and represents the values and vision that drive it forward. Participants will be required to redesign an existing logo and give it a new, fresh look, and they will be asked to pick the logo on the day of the event. The participants will be asked to share the story behind the new logo, the design process, and how it reflects innovation. Don't miss out on the chance to explore, innovate, and let your imaginations go wild.</p>
                <h3 className="mt-5 mb-4 text-xl font-bold text-left text-white font-title">Track 1 Rules</h3>
                <ul className="list-disc list-inside">
                  <li
                    className="text-lg text-white font-body md:text-xl"
                  >
                    The existing logos of an existing brand/ company will be provided
                  </li>
                  <li
                    className="text-lg text-white font-body md:text-xl"
                  >
                    Participants must revamp the existing logo.
                  </li>
                  <li
                    className="text-lg text-white font-body md:text-xl"
                  >
                    The Participants must present their logo along with a justification on why the logo has been revamped in a certain way
                  </li>
                  <li
                    className="text-lg text-white font-body md:text-xl"
                  >
                    The time stamps:
                    <ul className="list-disc list-inside">
                      <li className="text-lg text-white font-body md:text-xl">For designing the participants will be given a duration of 2 hours</li>
                      <li className="text-lg text-white font-body md:text-xl">For the preparation, a team/individual will be given 10 minutes</li>
                      <li className="text-lg text-white font-body md:text-xl">A team/individual will be given a maximum of 5 minutes to present</li>
                    </ul>
                  </li>
                </ul>
                <h3 className="mb-4 text-2xl font-bold text-left text-white font-title mt-5">TRACK 2 - POSTER DESIGNING</h3>
                <p className="text-lg text-justify  white font-body md:text-xl">This event focuses on the ability of a designer to comprehend a given concept and to come up with a visual design. The participants will be given a plot for a movie or a song track. They need to either design an album cover or a movie poster, respectively. The genres for the respective track or plot will also be provided.
                  The entries will be judged based on their creativity to visualize the given plot or track and express their thought process in the form of eye-catching posters. The designers would be given a chance to present their designs and explain them to the judges. Welcome to an immersive and fun experience.
                </p>
                <h3 className="mt-5 mb-4 text-xl font-bold text-left text-white font-title">Track 2 Rules</h3>
                <ul className="list-disc list-inside">
                  <li
                    className="text-lg text-white font-body md:text-xl"
                  >You can either choose to design an album cover or a movie poster.</li>
                  <li
                    className="text-lg text-white font-body md:text-xl"
                  >The time stamps:
                    <ul className="list-disc list-inside">
                      <li
                        className="text-lg text-white font-body md:text-xl"
                      >For designing the participants will be given a duration of 2 hours</li>
                      <li
                        className="text-lg text-white font-body md:text-xl"
                      >For the preparation, a team/individual will be given 10 minutes</li>
                      <li
                        className="text-lg text-white font-body md:text-xl"
                      >A team/individual will be given a maximum of 5 minutes to present</li>
                    </ul>
                  </li>
                </ul>
              </>
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
