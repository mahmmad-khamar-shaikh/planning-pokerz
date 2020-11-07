import { Component, OnInit } from '@angular/core';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ceremony',
  templateUrl: './ceremony.component.html',
  styleUrls: ['./ceremony.component.scss']
})
export class CeremonyComponent implements OnInit {
  faArrowLeft = faBackward;
  constructor() { }

  ngOnInit(): void {
  }

}
