import { CollegeLogo, Footer, PageHead } from "components";
import { Department } from "../types";
import {
  day1Data,
  day2Data,
  day3Data,
} from "../components/timeline-chart/timelines";
import { TimelineChart } from "../components/timeline-chart";

import { useState } from "react";

const dataMap = {
  [Department.DAY1]: day1Data,
  [Department.DAY2]: day2Data,
  [Department.DAY3]: day3Data,
};

const depts = Object.values(Department);

const Schedule = () => {
  const [selectedDept, setSelectedDept] = useState<string>(depts[0]);

  return (
    <>
      <div className="">
        <PageHead />
        <div className="flex flex-col items-center justify-center  p-2 md:p-4 m-auto text-white font-main">
          <CollegeLogo />
          <h2 className="mt-28 mb-2 font-bold text-center lg:text-4xl sm:text-3xl font-title">
            Schedule
          </h2>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-xl my-10 md:hidden text-white">Zoom and Click on events to explore</p>
        </div>
        <div className="flex flex-col lg:flex-row w-11/12 lg:w-5/6 mx-auto gap-10 my-20 ">
          <div className="overflow-hidden text-white lg:overflow-auto  lg:p-10 rounded-lg lg:w-1/4  backdrop-blur-md bg-black/30 border-[0.02rem] border-gray-400 border-opacity-20">
            <ul className="flex lg:flex-col px-2 gap-10 lg:gap-0 flex-row w-full justify-between">
              {depts.map((dept) => (
                <li
                  className="font-ubuntu min-w-fit lg:w-auto font-thin flex items-center cursor-pointer my-10 text-xl transition-all duration-300 hover:font-bold"
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                >
                  <i
                    className="text-2xl mt-1"
                    dangerouslySetInnerHTML={{
                      __html: `<ion-icon name="caret-forward-outline"></ion-icon>`,
                    }}
                  ></i>
                  {dept}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white p-5 md:p-10 rounded-lg lg:w-3/4 backdrop-blur-md bg-black/30 border-[0.02rem] border-gray-400 border-opacity-20">
            <h3 className="font-ubuntu font-bold text-2xl mb-10">
              {selectedDept}
            </h3>
            <TimelineChart data={dataMap[selectedDept as Department]} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;
