import { Injectable } from '@angular/core';
import { ISession } from '../types/session.interface';
import { IUser } from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionInformationService {
  private sessionObject: ISession;
  constructor() {
    this.sessionObject = {
      ceremonyId: '',
      teamId: '',
      userInfo: {}
    };
  }
  get sessionInformation(): ISession {
    return this.sessionObject;
  }
  set sessionCeremony(ceremonyToSet: string) {
    this.sessionObject.ceremonyId = ceremonyToSet;
  }
  set sessionTeam(teamToSet: string) {
    this.sessionObject.teamId = teamToSet;
  }
  get userInformation(): IUser {
    return this.sessionObject.userInfo;
  }
  set userInformation(userInfo: IUser) {
    this.sessionObject.userInfo = userInfo;
  }
}
