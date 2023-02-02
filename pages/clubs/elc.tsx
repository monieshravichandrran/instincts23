import { CollegeLogo, Footer, PageHead } from "components"

export default function About() {
  return (
    <>
      <PageHead />
      <CollegeLogo />
      <div className="min-h-screen lg:w-[98%] sm:w-full">
        <div className="flex flex-col items-center justify-center mt-24 p-4 m-auto text-white font-main">
          <h3 className="sm:text-2xl font-bold lg:text-5xl md:text-5xl font-title">
            English Literary Club
          </h3>
        </div>
        <div className="lg:ml-10 flex flex-wrap flex-row min-h-[70vh] items-center justify-center">
          <div className="lg:flex-1 sm:w-[95%] md:w-[95%] ml-2 mt-5 flex lg:flex-col  items-center sm:justify-center md:justify-center lg:justify-between  py-10  px-5 lg:min-h-[70vh] sm:min-h-fit md:min-h-fit shadow-2xl text-white sm:flex-row flex-wrap">
            <div className="rounded-lg p-2 mb-2 sm:mr-3 md:mr-3 bg-gray-800 hover:cursor-pointer hover:opacity-90">
              SSN Debates
            </div>
            <div className="rounded-lg p-2 mb-2 sm:mr-3 md:mr-3 bg-gray-800 hover:cursor-pointer hover:opacity-80">
              JAM
            </div>
            <div className="rounded-lg p-2 mb-2 sm:mr-3 md:mr-3 bg-gray-800 hover:cursor-pointer hover:opacity-80">
              SUCC - Stand Up Comedy Contest
            </div>
            <div className="rounded-lg p-2 mb-2 sm:mr-3 md:mr-3 bg-gray-800 hover:cursor-pointer hover:opacity-80">
              A Musing Affair
            </div>
            <div className="rounded-lg p-2 mb-2 sm:mr-3 md:mr-3 bg-gray-800 hover:cursor-pointer hover:opacity-80">
              Potpourri
            </div>
          </div>
          <div className="rounded-lg sm:mb-10 bg-gradient-to-r from-[#ae8141] to-gray-800 bg-blend-color-dodge p-10 lg:min-h-[70vh] md:min-h-fit lg:w-[74%] sm:w-[95%] md:w-[95%] mt-5 flex-wrap">
            <h3 className="text-white text-left mb-4  text-3xl font-bold">
              SSN Debates
            </h3>
            <p className="text-white font-body text-lg text-justify">
              A team debate competition. Speakers from each of the two competing
              teams will be given time to speak and each team will be given time
              to rebut.
            </p>
            <h2 className="text-white  text-2xl mt-10">Rules</h2>
            <ul className="list-disc list-inside">
              <li className="text-white font-body text-lg text-justify">
                3 minutes for each speaker and 1 minute for rebuttal
              </li>
              <li className="text-white font-body text-lg text-justify">
                Preparation time will be given for each topic{" "}
              </li>
              <li className="text-white font-body text-lg text-justify">
                Registration is on a first-come-first-serve basis.
              </li>
            </ul>
            <div className="flex gap-5 flex-wrap mt-10">
              <p className="text-white font-body text-lg text-justify">
                <b className=" ">Date:</b> May 13, 2022
              </p>
              <p className="text-white font-body text-lg text-justify">
                <b className=" ">Time:</b> 10 AM to 4 PM
              </p>
              <p className="text-white font-body text-lg text-justify">
                <b className=" ">Venue:</b>Old ECE Seminar Hall
              </p>
              <p className="text-white font-body text-lg text-justify">
                <b className=" ">Team Size:</b> 2
              </p>
              <p className="text-white font-body text-lg text-justify">
                <b className=" ">Type:</b> team
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg mt-10">Contact Numbers</h3>
              <p className="text-white font-body text-lg text-justify">
                Lohita 7550175954
              </p>
              <p className="text-white font-body text-lg text-justify">
                Shivangi8095295398
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
