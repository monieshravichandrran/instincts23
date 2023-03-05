import { Button, CollegeLogo, Footer, PageHead } from "components";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import Script from "next/script";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

export default function Celebrity() {
  return (
    <>
      <PageHead />
      <div className="p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="min-h-screen lg:w-[98%] sm:w-full flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-center lg:text-6xl font-title mb-12 mt-20">
            Celebrity Variety Show
          </h2>
          <div className="flex justify-center items-center">
            <div>
              <img
                src={"/images/proshows/celebrity/celeb1.jpg"}
                alt="ssnsnucinstincts"
                id="celebrityid"
                className="w-[85vw] h-[45vh] md:w-[35vw] md:h-[55vh]"
              />
            </div>
          </div>
          <div className="flex justify-center mt-12 md:w-[70vw]">
            <p className="p-4 text-xl shadow-lg lg:text-2xl rounded-br-3xl">
              Sit back, relax and gear up for the laughing fit the stand up comedians, Jagan Krishnan and Ramkumar, are going to give you in the Celebrity Variety Show-Thel Pathri Singh on the 9th of March at 2:00pm in the Main Auditorium.
            </p>
          </div>
          <div className="flex flex-col items-start justify-around mt-5">
            <div className="flex items-center justify-between">
              <div className="rounded-3xl bg-white flex justify-around items-center p-2 text-black w-fit sm:mr-3 md:mr-3">
                <BsFillCalendarCheckFill size={20} className="mr-2" />
                <p>March 9th, 2023</p>
              </div>
              <div className="rounded-3xl bg-white flex justify-around items-center p-2 text-black w-fit sm:mr-3 md:mr-3">
                <BsFillClockFill size={20} className="mr-2" />
                <p>2PM</p>
              </div>
              <div className="rounded-3xl bg-white flex justify-around items-center p-2 text-black sm:mr-3 md:mr-3">
                <IoLocationSharp size={20} />
                <p>Main Auditorium</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mb-5">
            <a href={"https://docs.google.com/forms/d/e/1FAIpQLSe7p7Owg9dOii-bBW3L4KWz5iNpgFotK8yK42r5Xseou4W-rg/viewform?usp=sf_link"}>
              <button
                className="neon-button mt-10 !text-white"
              >
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <Script src="celebrity.js" />
    </>
  );
}
