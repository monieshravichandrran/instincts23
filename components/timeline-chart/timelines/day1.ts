import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const day1Data: ApexOptions["series"] = [
  {
    name: "Inaugration",
    data: [
      {
        x: "Auditorium",
        y: [dateFormatter(8, 30), dateFormatter(11, 0)],
      },
    ],
  },
  {
    name: "Celebrity Variety Show",
    data: [{ x: "Auditorium", y: [dateFormatter(14, 0), dateFormatter(16, 0)] }],
  },
  {
    name: "Dance Battle",
    data: [{ x: "OAT", y: [dateFormatter(14, 0), dateFormatter(16, 0)] }],
  },
  {
    name: "Choreo Night",
    data: [{ x: "OAT", y: [dateFormatter(17, 30), dateFormatter(20, 30)] }],
  },
  {
    name: "Funda Mavan Gen Quiz",
    data: [{ x: "Central Seminar Hall", y: [dateFormatter(13, 30), dateFormatter(16, 30)] }],
  },
  {
    name: "The Valor Cup",
    data: [{ x: "CSE Lab", y: [dateFormatter(11, 30), dateFormatter(15, 30)] }],
  },
  {
    name: "Creative Writing",
    data: [{ x: "CSE LH45", y: [dateFormatter(12, 0), dateFormatter(14, 0)] }],
  },
  {
    name: "Potpourri",
    data: [{ x: "CSE Seminar Hall", y: [dateFormatter(11, 30), dateFormatter(17, 0)] }],
  },
  {
    name: "Udaan",
    data: [{ x: "IT Seminar Hall", y: [dateFormatter(12, 0), dateFormatter(14, 0)] }],
  },
  {
    name: "Pattimandram Prelims",
    data: [{ x: "IT Seminar Hall", y: [dateFormatter(15, 0), dateFormatter(17, 0)] }],
  },
  {
    name: "Draw with comali",
    data: [{ x: "SNU Classroom 1", y: [dateFormatter(11, 30), dateFormatter(13, 30)] }],
  },
  {
    name: "Western Solo",
    data: [{ x: "SNU Lobby", y: [dateFormatter(11, 30), dateFormatter(14, 30)] }],
  },
  {
    name: "Riff Off",
    data: [{ x: "SNU Seminar Hall", y: [dateFormatter(11, 30), dateFormatter(14, 0)] }],
  },
];
