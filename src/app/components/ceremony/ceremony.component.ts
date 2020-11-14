import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CeremonyService } from 'src/app/services/ceremony.service';
import { SessionInformationService } from 'src/app/services/session-information.service';
import { CeremonyOptions } from 'src/app/types/custom.types';
import { ICeremony } from 'src/app/types/shared.interface';

@Component({
  selector: 'app-ceremony',
  templateUrl: './ceremony.component.html',
  styleUrls: ['./ceremony.component.scss']
})
export class CeremonyComponent implements OnInit {
  ceremonies$: ICeremony[];

  constructor(
    private ceremonyService: CeremonyService,
    private router: Router,
    private sessionInformationService: SessionInformationService
  ) { }
  ngOnInit(): void {
    this.ceremonyService.getCeremonyCollection.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.ceremonies$ = data;
    });

  }

  navigateToCermony(ceremonyType: CeremonyOptions, ceremonyId: string): void {
    switch (ceremonyType.toString()) {
      case 'Estimation':
        this.sessionInformationService.sessionCeremony = ceremonyId;
        this.router.navigate(['/home/avtar']);
        break;
      case 'Retrospective':
        this.router.navigate(['/home/retro-dashboard']);
        break;
      case 'Scrum':
        this.router.navigate(['/home/scrum-dashboard']);
        break;
      default:
        break;
    }

  }

}
