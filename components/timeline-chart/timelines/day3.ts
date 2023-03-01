import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const day3Data: ApexOptions["series"] = [
  {
    name: "Pattimandram",
    data: [{ x: "Day 2", y: [dateFormatter(10, 0), dateFormatter(12, 30)] }],
  },
  {
    name: "Anunad Finals",
    data: [{ x: "Day 2", y: [dateFormatter(14, 0), dateFormatter(16, 0)] }],
  },
  {
    name: "Anunad Prelims						 ",
    data: [{ x: "Day 2", y: [dateFormatter(10, 0), dateFormatter(13, 0)] }],
  },
  {
    name: "Lights, Camera, Sale!				",
    data: [{ x: "Day 2", y: [dateFormatter(14, 30), dateFormatter(16, 30)] }],
  },
  {
    name: "Shipwreck						",
    data: [{ x: "Day 2", y: [dateFormatter(10, 0), dateFormatter(13, 0)] }],
  },
  {
    name: "Sports Quiz						",
    data: [{ x: "Day 2", y: [dateFormatter(10, 0), dateFormatter(13, 0)] }],
  },
  {
    name: "Jam						",
    data: [{ x: "Day 2", y: [dateFormatter(14, 0), dateFormatter(17, 0)] }],
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
    name: "Fire Silambam															",
    data: [{ x: "Day 2", y: [dateFormatter(16, 0), dateFormatter(16, 30)] }],
  },
  {
    name: "WHAT A LOOK!							",
    data: [{ x: "Day 2", y: [dateFormatter(11, 0), dateFormatter(12, 30)] }],
  },
  {
    name: "UI/UX Design													    ",
    data: [{ x: "Day 2", y: [dateFormatter(10, 0), dateFormatter(13, 30)] }],
  },
  {
    name: "IPL Auction																				",
    data: [{ x: "Day 2", y: [dateFormatter(8, 30), dateFormatter(15, 30)] }],
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
