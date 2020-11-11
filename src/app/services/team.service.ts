import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { ITeams } from '../types/shared.interface';
import { DALService } from './dal.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private dalServiceRef: DALService<ITeams>) {
  }

  get getTeamCollection(): AngularFirestoreCollection<ITeams> {
    const teamPath = 'Teams';
    return this.dalServiceRef.getCollection(teamPath);
  }

}
