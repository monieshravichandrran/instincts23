import React from "react"
import Image from "next/image"
import { Button } from "components/button"

type Children = {
  imageSource: string
  alternate: string
  clubName: string
  description: string
  link: string
}

export const Club = ({
  imageSource,
  alternate,
  clubName,
  description,
  link,
}: Children) => {
  return (
    <>
      <div className="shadow-2xl lg:w-[25vw] sm:w-[36vw] lg:p-[5vw] sm:p-[2vw]">
        <Image
          src={"/images/clubs/" + imageSource}
          alt={alternate}
          height={300}
          width={300}
          className="mb-[4rem] p-8 lg:p-8"
        />
        <h2 className="mb-4 text-3xl font-bold text-center glow">{clubName}</h2>
        <p className="my-10 text-lg text-center">{description}</p>
        <div className="flex justify-center mb-4">
          <Button href={link} children="Explore" large />
        </div>
      </div>
    </>
  )
}
