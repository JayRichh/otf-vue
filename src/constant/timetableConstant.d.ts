// timetableConstant
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

declare const timetableData: Day[];

export default timetableData;
