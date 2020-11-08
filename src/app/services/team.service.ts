import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITeams } from '../types/shared.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private fireStoreRef: AngularFirestore) {
  }

  getTeamCollection(): AngularFirestoreCollection<ITeams> {
    const teamPath = 'Teams';
    return this.fireStoreRef.collection<ITeams>(teamPath);
  }

}
