import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const day2Data: ApexOptions["series"] = [
  {
    name: "Reels of Fire",
    data: [{ x: "Day 2", y: [dateFormatter(9, 0), dateFormatter(12, 0)] }],
  },
  {
    name: "Student Variety Show Finals",
    data: [{ x: "Day 2", y: [dateFormatter(14, 0), dateFormatter(16, 30)] }],
  },
  {
    name: "Student Variety Show ",
    data: [{ x: "Day 2", y: [dateFormatter(10, 0), dateFormatter(13, 0)] }],
  },
  {
    name: "Proshow",
    data: [{ x: "Day 2", y: [dateFormatter(18, 0), dateFormatter(20, 30)] }],
  },
  {
    name: "Band Hunt",
    data: [{ x: "Day 2", y: [dateFormatter(9, 0), dateFormatter(13, 0)] }],
  },
  {
    name: "Lights. Camera. Thadhinginathom",
    data: [{ x: "Day 2", y: [dateFormatter(9, 0), dateFormatter(11, 0)] }],
  },
  {
    name: "Let Experts Talk",
    data: [{ x: "Day 2", y: [dateFormatter(13, 0), dateFormatter(15, 30)] }],
  },
  {
    name: "The Valor Cup								",
    data: [{ x: "Day 2", y: [dateFormatter(9, 30), dateFormatter(13, 30)] }],
  },
  {
    name: "Call of Duty								",
    data: [{ x: "Day 2", y: [dateFormatter(10, 0), dateFormatter(14, 0)] }],
  },
  {
    name: "Debate														",
    data: [{ x: "Day 2", y: [dateFormatter(9, 30), dateFormatter(16, 30)] }],
  },
  {
    name: "ENIGMA (MYSTERY EVENT)						",
    data: [{ x: "Day 2", y: [dateFormatter(9, 30), dateFormatter(12, 30)] }],
  },
  {
    name: "MELA						    ",
    data: [{ x: "Day 2", y: [dateFormatter(13, 30), dateFormatter(16, 30)] }],
  },
  {
    name: "SUCC						",
    data: [{ x: "Day 2", y: [dateFormatter(9, 30), dateFormatter(12, 30)] }],
  },
  {
    name: "Spotlight												",
    data: [{ x: "Day 2", y: [dateFormatter(13, 30), dateFormatter(16, 30)] }],
  },
  {
    name: "Sagalakalavallavan																		",
    data: [{ x: "Day 2", y: [dateFormatter(13, 30), dateFormatter(16, 30)] }],
  },
  {
    name: "Bike Stunt Show																				",
    data: [{ x: "Day 2", y: [dateFormatter(16, 30), dateFormatter(17, 30)] }],
  },
  {
    name: "SOLES ON FIRE 																							",
    data: [{ x: "Day 2", y: [dateFormatter(11, 0), dateFormatter(12, 30)] }],
  },
  {
    name: "ROAMING PARIS				",
    data: [{ x: "Day 2", y: [dateFormatter(14, 0), dateFormatter(16, 0)] }],
  },
  {
    name: "Designathon										",
    data: [{ x: "Day 2", y: [dateFormatter(10, 0), dateFormatter(13, 30)] }],
  },
];
