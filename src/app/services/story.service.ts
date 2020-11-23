import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(
    private angularFirestoreService: AngularFirestore
  ) { }

  public currentStoy(meetingId: string): AngularFirestoreCollection<any> {
    console.log('meeting id requested', meetingId);
    return this.angularFirestoreService.collection('Stories', ref => {
      return ref
        .where('meetingId', '==', meetingId);
    });
  }

  public currentStoryByStoryName(storyName: string): AngularFirestoreCollection<any> {
    return this.angularFirestoreService.collection
  }
}
