import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IMeeting } from '../types/shared.interface';
import { SessionInformationService } from './session-information.service';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(
    private angularFirestoreService: AngularFirestore,
    private sessionInformationService: SessionInformationService
  ) { }

  get liveMeeting(): AngularFirestoreCollection<IMeeting> {
    return this.angularFirestoreService.collection('Meetings');
    // , ref => {
    //   return ref
    //   //  .where('ceremonyId', '==', this.sessionInformationService.sessionInformation.ceremonyId)
    //    // .where('isMettingLive', '==', true);
    // });
  }

}
