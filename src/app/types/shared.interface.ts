export interface ICardValue {
  type: string;
  value: string;
}
export interface IStoryPointChoice {
  userName: string;
  storyPoint: string;
}

export interface ITeams {
  teamId: string;
  teamName: string;
}

export interface ICeremony {
  ceremonyId: string;
  ceremonyName: string;
}

export interface IMeeting {
  ceremonyId: string;
  meetingStartedDateTime: Date;
  meetingEndedDateTime?: Date;
  startedBy?: string;
  endedBy?: string;
  isMeetingLive: boolean;
}
