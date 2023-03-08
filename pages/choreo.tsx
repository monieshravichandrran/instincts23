import { Button, CollegeLogo, Footer, PageHead } from "components";
import Head from "next/head";

interface IPageHead {
  title?: string;
  description?: string;
}

export const PageHead = ({
  title = "Choreo Night | SSN SNUC Instincts 2023",
  description = "Pump up your emotions on choreo night and let it all go for a night of choreo!",
}: IPageHead) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/instinctsLogo.jpeg" />
    </Head>
  );
};

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import Script from "next/script";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

export default function Bike() {
  return (
    <>
      <PageHead />
      <div className="p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="min-h-screen lg:w-[98%] sm:w-full flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-center lg:text-6xl font-title mb-12 mt-20">
            Choreo Nite
          </h2>
          <div className="flex justify-center items-center">
            <div>
              <img
                src={"/images/proshows/choreo/chor1.jpg"}
                id="chorid"
                alt="Poster for the Choreo night for Instincts"
                className="w-[85vw] h-[60vh] md:w-[35vw] md:h-[65vh]"
              />
            </div>
          </div>
          <div className="flex justify-center mt-12 md:w-[70vw]">
            <p className="p-4 text-xl shadow-lg lg:text-2xl rounded-br-3xl">
              Energising beats, a congregation of the best moves ever, judged by the founder of the BFab dance crew-Ravi Varma. Witness the emotions and passion take form in the Choreonite on the 9th of March from 5:30pm at the Open Air Theatre.
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
                <p>5:30PM</p>
              </div>
              <div className="rounded-3xl bg-white flex justify-around items-center p-2 text-black sm:mr-3 md:mr-3">
                <IoLocationSharp size={20} />
                <p> OAT</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <a href={"https://docs.google.com/forms/d/e/1FAIpQLSd6VMVgwUaCjgGdWigws5g_cfof_gev03GoQSTbgrYjvgMrgw/viewform?embedded=true"}>
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
      <Script src="choreo.js" />
    </>
  );
}
