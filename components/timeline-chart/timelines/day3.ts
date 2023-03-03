import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const day3Data: ApexOptions["series"] = [
  {
    name: "Pattimandram",
    data: [{ x: "Auditorium", y: [dateFormatter(10, 0), dateFormatter(12, 30)] }],
  },
  {
    name: "Anunad Finals",
    data: [{ x: "Auditorium", y: [dateFormatter(14, 0), dateFormatter(16, 0)] }],
  },
  {
    name: "Anunad Prelims						 ",
    data: [{ x: "Mini Audi", y: [dateFormatter(10, 0), dateFormatter(13, 0)] }],
  },
  {
    name: "Lights, Camera, Sale!				",
    data: [{ x: "Mini Audi", y: [dateFormatter(14, 30), dateFormatter(16, 30)] }],
  },
  {
    name: "Shipwreck						",
    data: [{ x: "OAT", y: [dateFormatter(10, 0), dateFormatter(13, 0)] }],
  },
  {
    name: "Sports Quiz						",
    data: [{ x: "Central Seminar Hall", y: [dateFormatter(10, 0), dateFormatter(13, 0)] }],
  },
  {
    name: "Jam",
    data: [{ x: "Central Seminar Hall", y: [dateFormatter(14, 0), dateFormatter(17, 0)] }],
  },
  {
    name: "The Valor Cup",
    data: [{ x: "Day 2", y: [dateFormatter(9, 30), dateFormatter(13, 30)] }],
  },
  {
    name: "Call of Duty",
    data: [{ x: "CSE LH49", y: [dateFormatter(10, 0), dateFormatter(14, 0)] }],
  },
  {
    name: "DJ Night",
    data: [{ x: "OAT", y: [dateFormatter(10, 0), dateFormatter(14, 0)] }],
  },
  {
    name: "Fire Silambam",
    data: [{ x: "Fountain", y: [dateFormatter(18, 30), dateFormatter(20, 30)] }],
  },
  {
    name: "WHAT A LOOK!",
    data: [{ x: "SNU Classroom 1", y: [dateFormatter(11, 0), dateFormatter(12, 30)] }],
  },
  {
    name: "UI/UX Design",
    data: [{ x: "SNU Classroom 2", y: [dateFormatter(10, 0), dateFormatter(13, 30)] }],
  },
  {
    name: "IPL Auction",
    data: [{ x: "SNU Lobby", y: [dateFormatter(8, 30), dateFormatter(15, 30)] }],
  },
];
