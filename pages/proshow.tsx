import { Button, CollegeLogo, Footer } from "components"
import Head from "next/head"

interface IPageHead {
  title?: string
  description?: string
}

export const PageHead = ({
  title = "Proshow Concert | SSN SNUC Instincts 2023",
  description = "Sing and dance your heart out to the epic performance from the Non Violinist Project on this night!",
}: IPageHead) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/instinctsLogo.jpeg" />
    </Head>
  )
}
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Script from "next/script"
import { BsFillCalendarCheckFill } from "react-icons/bs"
import { BsFillClockFill } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5"

export default function Pro() {
  return (
    <>
      <PageHead />
      <div className="p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="min-h-screen lg:w-[98%] sm:w-full flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-center lg:text-6xl font-title mb-12 mt-20">
            Pro Show
          </h2>
          <div className="flex justify-center items-center">
            <div>
              <img
                src={"/images/proshows/pro/pro1.jpg"}
                alt="Poster for the Pro Show by the Non Violinist Project for Instincts"
                id="proid"
                className="w-[85vw] h-[50vh] md:w-[40vw] md:h-[50vh]"
              />
            </div>
          </div>
          <div className="flex justify-center mt-12 md:w-[70vw]">
            <p className="p-4 text-xl shadow-lg lg:text-2xl rounded-br-3xl">
              Put your worries aside, gather your friends and vibe to the
              mesmerising music vocalised by Sathya Prakash, Rakshitha and Anand
              Aravindakshan along with the band, the Non Violinist Project on
              the 10th of March from 5:30pm at the Open Air Theatre.
            </p>
          </div>
          <div className="flex flex-col items-start justify-around mt-5">
            <div className="flex items-center justify-between">
              <div className="rounded-3xl bg-white flex justify-around items-center p-2 text-black w-fit sm:mr-3 md:mr-3">
                <BsFillCalendarCheckFill size={20} className="mr-2" />
                <p>March 10th, 2023</p>
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
        </div>
      </div>
      <Footer />
      <Script src="pro.js" />
    </>
  )
}
