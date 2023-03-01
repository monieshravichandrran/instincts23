export enum EventPass {
  Technical = "Technical",
  NonTechnical = "Non-Technical",
  Workshop = "Workshop",
  Hackathon = "Hackathon",
}

export enum Department {
  DAY1 = "DAY1",
  DAY2 = "DAY2",
  DAY3 = "DAY3",
}

export interface Section {
  sectionName: string;
  sectionData: string;
}
export enum EventType {
  Individual = "Individual",
  Team = "Team",
  TeamOrSolo = "Team Or Solo",
}

export interface Event {
  id: string;
  event_name: string;
  description: string;
  type: EventType;
  size: string;
  department: Department;
  venue: string;
  time: string;
  sections: Record<string, any>;
}
