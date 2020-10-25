import { Component, OnInit } from '@angular/core';
import { IStoryPointChoice } from 'src/app/types/shared.interface';

@Component({
  selector: 'app-limited-dashboard',
  templateUrl: './limited-dashboard.component.html',
  styleUrls: ['./limited-dashboard.component.scss']
})
export class LimitedDashboardComponent implements OnInit {
  public storyPointCollection: IStoryPointChoice[];
  constructor() { }
  ngOnInit(): void {
    this.storyPointCollection = [
      { userName: 'Mahmmadkhamar Shaikh', storyPoint: '3' },
      { userName: 'Pandari', storyPoint: '3' },
      { userName: 'Akash', storyPoint: '3' },
      { userName: 'Vaibhav', storyPoint: '3' }];
  }

}
