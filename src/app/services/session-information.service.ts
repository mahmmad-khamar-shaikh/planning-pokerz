import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISession } from '../types/session.interface';
import { IUser } from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionInformationService {
  private sessionObject: ISession;
  public storyNameSubect = new BehaviorSubject<string>('');
  constructor() {
    this.clearSessionObject();
  }
  get getSessionInformation(): ISession {
    return this.sessionObject;
  }
  set setSessionCeremony(ceremonyToSet: string) {
    this.sessionObject.ceremonyId = ceremonyToSet;
  }
  set setSessionTeam(teamToSet: string) {
    this.sessionObject.teamId = teamToSet;
  }
  get getUserInformation(): IUser {
    return this.sessionObject.userInfo;
  }
  set setUserInformation(userInfo: IUser) {
    this.sessionObject.userInfo = userInfo;
  }
  set setMeeting(meetingId: string) {
    this.sessionObject.meetingId = meetingId;
  }
  set setCurrentStory(storyName: string) {
    this.sessionObject.currentStory = storyName;
  }
  set setCurrentStoryId(storyId: string) {
    this.sessionObject.currentStoryId = storyId;
  }
  get getStoryNameSubject(): Observable<string> {
    return this.storyNameSubect;
  }
  clearSessionObject(): void {
    this.sessionObject = {
      meetingId: '',
      ceremonyId: '',
      teamId: '',
      currentStory: '',
      currentStoryId: '',
      userInfo: {}
    };
  }
  set setStoryNameSubject(storyName: string) {
    this.storyNameSubect.next(storyName);
  }

}
