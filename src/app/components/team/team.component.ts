import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { map } from 'rxjs/operators';
import { SessionInformationService } from 'src/app/services/session-information.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teams$: any;
  constructor(
    private teamService: TeamService,
    private sessionService: SessionInformationService,
    private router: Router,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.sessionService.showHideLoader = true;
    this.teamService.getTeamCollection.snapshotChanges().pipe(
      map(changes =>
        changes.map(this.utilService.dbToDomanEntity)
      )
    ).subscribe(data => {
      this.teams$ = data;
      this.sessionService.showHideLoader = false;
    });

  }
  navigateToCeremony(teamId: string): void {
    this.sessionService.setSessionTeam = teamId;
    this.router.navigate(['/home/ceremony']);
  }
}
