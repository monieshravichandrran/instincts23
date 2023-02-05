import { CollegeLogo, Footer, PageHead } from "components";
import { useState } from "react";

type people = {
  name: string;
  phone: string;
}

type eventDetailsType = {
  eventNames: string;
  description: string;
  rules?: string[];
  date: string;
  fromTime?: string;
  toTime?: string;
  venue?: string;
  type: string;
  team_size?: string;
  organizers?: people[];
  ruleBook?: string
}


type Children = {
  clubName: string;
  eventDetails: eventDetailsType[];
}

export const Events = ({ clubName, eventDetails }: Children) => {
  const [selecteId, setSelectedId] = useState(0);
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-24 p-4 m-auto text-white font-main">
        <h3 className="sm:text-2xl font-bold lg:text-5xl md:text-5xl font-title">
          {clubName}
        </h3>
      </div>
      <div className="lg:ml-10 flex flex-wrap flex-row min-h-[70vh] items-center justify-center">
        <div className="lg:flex-1 sm:w-[95%] md:w-[95%] ml-2 mt-5 flex lg:flex-col  items-center sm:justify-center md:justify-center lg:justify-evenly  py-10  px-5 lg:min-h-[70vh] sm:min-h-fit md:min-h-fit shadow-2xl text-white sm:flex-row flex-wrap">
          {eventDetails.map((item, index) => {
            return (
              <div onClick={() => { setSelectedId(index); }} className="font-title rounded-lg p-2 mb-2 sm:mr-3 md:mr-3 md:text-xl bg-gray-800 hover:cursor-pointer hover:opacity-90">
                {item.eventNames}
              </div>
            )
          })}
        </div>
        <div className="rounded-lg sm:mb-10 bg-gradient-to-r from-[#ae8141] to-gray-800 bg-blend-color-dodge p-10 lg:min-h-[70vh] md:min-h-fit lg:w-[74%] sm:w-[95%] md:w-[95%] mt-5 flex-wrap">
          <h3 className="font-title text-white text-left mb-4  text-3xl font-bold">
            {eventDetails[selecteId].eventNames}
          </h3>
          <p className="text-white font-body text-lg md:text-xl text-justify">
            {eventDetails[selecteId].description}
          </p>
          <h2 className="font-title text-white  text-2xl mt-10">Rules</h2>
          {
            eventDetails[selecteId].rules?.length ?
              <ul className="list-disc list-inside">
                {eventDetails[selecteId].rules?.map((li_item) => {
                  return (
                    <li className="text-white font-body text-lg md:text-xl text-justify">
                      {li_item}
                    </li>
                  )
                })}
              </ul> : <p className="text-white font-body text-lg md:text-xl text-justify">
                  <b className="font-title mr-1">TBD</b>
                </p>
          }
          <div className="flex gap-5 flex-wrap mt-10">
            <p className="text-white font-body text-lg md:text-xl text-justify">
              <b className="font-title mr-1">Date:</b>{eventDetails[selecteId].date}
            </p>
            <p className="text-white font-body text-lg md:text-xl text-justify">
              <b className="font-title mr-1">Time:</b> {(eventDetails[selecteId].fromTime && eventDetails[selecteId].toTime) ? <>{eventDetails[selecteId].fromTime} to {eventDetails[selecteId].toTime}</> : "NA"}
            </p>
            <p className="text-white font-body text-lg md:text-xl text-justify">
              <b className="font-title mr-1">Venue:</b> {eventDetails[selecteId].venue}
            </p>
            <p className="text-white font-body text-lg md:text-xl text-justify">
              <b className="font-title mr-1">Team Size:</b> {eventDetails[selecteId].team_size ? eventDetails[selecteId].team_size : "TBD"}
            </p>
            <p className="text-white font-body text-lg md:text-xl text-justify">
              <b className="font-title mr-1">Type:</b> {eventDetails[selecteId].type}
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg mt-10 font-title">Contact Numbers</h3>
            {
              eventDetails[selecteId].organizers?.length  ?
                <>
                  {eventDetails[selecteId].organizers?.map((item) => {
                    return (
                      <p className="text-white font-body text-lg md:text-xl text-justify">
                        {item.name} - {item.phone}
                      </p>)
                  })}</> :         <p className="text-white font-body text-lg md:text-xl text-justify">
                  <b className="font-title mr-1">TBD</b>
                </p>
            }
          </div>
          {eventDetails[selecteId].ruleBook && <a className="relative left-[55%] sm:left-[60%] md:left-[70%] lg:left-[80%]   w-full text-right m-4 text-white px-6 py-2 text-green-100 rounded bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500" href={eventDetails[selecteId].ruleBook}>Rule Book</a>}
        </div>
      </div>
    </>
  )
}
