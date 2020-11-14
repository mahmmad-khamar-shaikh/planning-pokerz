import { Injectable } from '@angular/core';
import { ISession } from '../types/session.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionInformationService {
  private sessionObject: ISession;
  constructor() { }
  get sessionInformation(): ISession {
    return this.sessionObject;
  }
  set sessionInformation(sessionToBeSet: ISession) {
    this.sessionObject = sessionToBeSet;
  }
}
