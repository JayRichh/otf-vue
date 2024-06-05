export interface Session {
  time: string;
  info: string;
  price: string;
}

export interface Day {
  name: string;
  closed: boolean;
  image: string;
  sessions: Session[];
}

const timetableData: Day[] = [
  {
    name: "Mon",
    closed: false,
    image: "src/assets/set1.png",
    sessions: [
      { time: "19:00", info: "Adult Only", price: "£8" },
      { time: "20:00", info: "Mixed Equipment", price: "£8" },
      { time: "21:00", info: "Dance/Acro", price: "£5" },
    ],
  },
  {
    name: "Tues",
    closed: true,
    image: "src/assets/set2.png",
    sessions: [],
  },
  {
    name: "Wed",
    closed: false,
    image: "src/assets/set3.png",
    sessions: [
      { time: "18:00", info: "All Ages", price: "£8" },
      { time: "19:00", info: "Mixed Equipment", price: "£8" },
    ],
  },
  {
    name: "Thurs",
    closed: false,
    image: "src/assets/set4.png",
    sessions: [
      { time: "18:00", info: "All Ages", price: "£8" },
      { time: "19:00", info: "Mixed Equipment", price: "£8" },
    ],
  },
  {
    name: "Fri",
    closed: false,
    image: "src/assets/set5.png",
    sessions: [
      { time: "17:30", info: "Kids Only", price: "£8" },
    ],
  },
  {
    name: "Sat",
    closed: false,
    image: "src/assets/set6.png",
    sessions: [
      { time: "10:00", info: "Mixed", price: "£8 - Kids Only" },
      { time: "11:00", info: "Mixed", price: "£8 - Kids Only" },
      { time: "12:00", info: "Mixed", price: "£8 - Senior Kids\n/Adults Only" },
    ],
  },
  {
    name: "Sun",
    closed: true,
    image: "src/assets/set7.png",
    sessions: [],
  },
];

export default timetableData;
