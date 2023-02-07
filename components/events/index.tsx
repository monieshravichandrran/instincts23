/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Fragment, useState } from "react";

type people = {
  name: string;
  phone: string;
};

type ruleType = {
  rules: string[];
  ruleHead?: string;
};

type eventDetailsType = {
  eventNames: string;
  description: string;
  rules?: ruleType[];
  date: string;
  fromTime?: string;
  toTime?: string;
  venue?: string;
  type: string;
  team_size?: string;
  organizers?: people[];
  ruleBook?: string;
};

type Children = {
  clubName: string;
  eventDetails: eventDetailsType[];
};

export const Events = ({ clubName, eventDetails }: Children) => {
  const [selecteId, setSelectedId] = useState(0);
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 m-auto mt-24 text-white font-main">
        <h3 className="font-bold sm:text-2xl lg:text-5xl md:text-5xl font-title">
          {clubName}
        </h3>
      </div>
      <div className="lg:ml-10 flex flex-wrap flex-row min-h-[70vh] items-center justify-center">
        <div className="lg:flex-1 sm:w-[95%] md:w-[95%] ml-2 mt-5 flex lg:flex-col  items-center sm:justify-center md:justify-center lg:justify-evenly  py-10  px-5 lg:min-h-[70vh] sm:min-h-fit md:min-h-fit shadow-2xl text-white sm:flex-row flex-wrap">
          {eventDetails.map((item, index) => (
            <div
              key={item.eventNames}
              onClick={() => {
                setSelectedId(index);
              }}
              className="p-2 mb-2 bg-gray-800 rounded-lg font-title sm:mr-3 md:mr-3 md:text-xl hover:cursor-pointer hover:opacity-90"
            >
              {item.eventNames}
            </div>
          ))}
        </div>
        <div className="rounded-lg sm:mb-10 bg-gradient-to-r from-[#ae8141] to-gray-800 bg-blend-color-dodge p-10 lg:min-h-[70vh] md:min-h-fit lg:w-[74%] sm:w-[95%] md:w-[95%] mt-5 flex-wrap">
          <h3 className="mb-4 text-3xl font-bold text-left text-white font-title">
            {eventDetails[selecteId].eventNames}
          </h3>
          <p className="text-lg text-justify text-white font-body md:text-xl">
            {eventDetails[selecteId].description}
          </p>
          <h2 className="mt-10 text-2xl text-white font-title">Rules</h2>
          {eventDetails[selecteId].rules?.length ? (
            <>
              {eventDetails[selecteId].rules?.map((li_item) => (
                <Fragment key={li_item.ruleHead}>
                  {li_item.ruleHead ? (
                    <p className="my-4 text-xl text-justify text-white font-body md:text-2xl">
                      {li_item.ruleHead}
                    </p>
                  ) : null}
                  <ul className="list-disc list-inside">
                    {li_item.rules?.map((item) => (
                      <li
                        key={item}
                        className="text-lg text-justify text-white font-body md:text-xl"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Fragment>
              ))}
            </>
          ) : (
            <p className="text-lg text-justify text-white font-body md:text-xl">
              <b className="mr-1 font-title">TBD</b>
            </p>
          )}
          <div className="flex flex-wrap gap-5 mt-10">
            <p className="text-lg text-justify text-white font-body md:text-xl">
              <b className="mr-1 font-title">Date:</b>
              {eventDetails[selecteId].date}
            </p>
            <p className="text-lg text-justify text-white font-body md:text-xl">
              <b className="mr-1 font-title">Time:</b>{" "}
              {eventDetails[selecteId].fromTime &&
              eventDetails[selecteId].toTime ? (
                <>
                  {eventDetails[selecteId].fromTime} to{" "}
                  {eventDetails[selecteId].toTime}
                </>
              ) : (
                "TBD"
              )}
            </p>
            <p className="text-lg text-justify text-white font-body md:text-xl">
              <b className="mr-1 font-title">Venue:</b>{" "}
              {eventDetails[selecteId].venue}
            </p>
            <p className="text-lg text-justify text-white font-body md:text-xl">
              <b className="mr-1 font-title">Team Size:</b>{" "}
              {eventDetails[selecteId].team_size
                ? eventDetails[selecteId].team_size
                : "TBD"}
            </p>
            <p className="text-lg text-justify text-white font-body md:text-xl">
              <b className="mr-1 font-title">Type:</b>{" "}
              {eventDetails[selecteId].type}
            </p>
          </div>
          <div>
            <h3 className="mt-10 text-lg text-white font-title">
              Contact Numbers
            </h3>
            {eventDetails[selecteId].organizers?.length ? (
              <>
                {eventDetails[selecteId].organizers?.map((item) => (
                  <p
                    key={item.name}
                    className="text-lg text-justify text-white font-body md:text-xl"
                  >
                    {item.name} - {item.phone}
                  </p>
                ))}
              </>
            ) : (
              <p className="text-lg text-justify text-white font-body md:text-xl">
                <b className="mr-1 font-title">TBD</b>
              </p>
            )}
          </div>
          {eventDetails[selecteId].ruleBook && (
            <a
              className="relative left-[55%] sm:left-[60%] md:left-[70%] lg:left-[80%]   w-full text-right m-4 text-white px-6 py-2 text-green-100 rounded bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500"
              href={eventDetails[selecteId].ruleBook}
            >
              Rule Book
            </a>
          )}
        </div>
      </div>
    </>
  );
};
