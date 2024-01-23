import { CollegeLogo, Footer } from "components"

import Head from "next/head"

interface IPageHead {
  title?: string
  description?: string
}

export const PageHead = ({
  title = "Events | SSN SNUC Instincts 2023",
  description = "Find out all the events planned for Instincts 2023 and get to know about them here.",
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

import { Club } from "components/clubs"
import { Clubs } from "data/debugClubs"
import React from "react"
import Script from "next/script"

export default function Events() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <h2 className="mt-20 mb-2 font-bold text-center lg:text-4xl sm:text-3xl font-title">
          Events
        </h2>
        <div
          id="container"
          className="justify-center min-w-[96vw] flex md:min-w-[85vw]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] text-xl rounded-br-3xl w-full">
            {Clubs.map((item, index) => (
              <Club
                key={index}
                imageSource={item.imageSource}
                alternate={item.alternate}
                clubName={item.clubName}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <Script src="controller.js" />
    </>
  )
}
