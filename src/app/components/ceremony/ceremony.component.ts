import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CeremonyService } from 'src/app/services/ceremony.service';
import { ICeremony } from 'src/app/types/shared.interface';

@Component({
  selector: 'app-ceremony',
  templateUrl: './ceremony.component.html',
  styleUrls: ['./ceremony.component.scss']
})
export class CeremonyComponent implements OnInit {
  ceremonies$: ICeremony[];

  constructor(private ceremonyService: CeremonyService) { }
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

}
