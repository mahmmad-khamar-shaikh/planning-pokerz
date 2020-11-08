import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teams$: any;
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeamCollection().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.teams$ = data;
    });

  }

}
