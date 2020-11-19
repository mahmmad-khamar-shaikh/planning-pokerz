import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginInfoService } from 'src/app/services/login-info.service';
import { MeetingService } from 'src/app/services/meeting.service';
import { SessionInformationService } from 'src/app/services/session-information.service';
import { StoryService } from 'src/app/services/story.service';
import { UtilService } from 'src/app/services/util.service';
import { ICardValue, IMeeting } from 'src/app/types/shared.interface';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public role: string;
  public userName: string;
  public cardValue: ICardValue = { type: '', value: '' };
  public storyNumber: string;
  public arrayStoryNumber = ['0', '2', '3', '5', '8', '13'];
  public meetingCollection$: Observable<IMeeting[]>;
  public currentMeetingId: string;
  public isStoryButtonDisabled = true;

  constructor(
    private sessionInformationService: SessionInformationService,
    private meetingService: MeetingService,
    private utilService: UtilService,
    private storyService: StoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userName = this.sessionInformationService.userInformation.name;
    this.role = this.sessionInformationService?.userInformation?.role?.toString();
    this.isStoryButtonDisabled = this.role?.toString() !== 'SL';
    this.meetingService.liveMeeting.snapshotChanges().pipe(map(actions => {
      return actions.map(this.utilService.dbToDomanEntity);
    })).subscribe(d => {
      d.map(t => {
        console.log(`ceremony ID ${t.ceremonyId}`);
        this.storyService.currentStoy(t.id).snapshotChanges().pipe(map(actions => {
          return actions.map(this.utilService.dbToDomanEntity);
        })).subscribe(data => {
          data.map(v => {
            console.log(`stories data arrived ${v.storyName}`);
            this.storyNumber = v.storyName;
          });
        });

      });
    });


  }
  cardSelection = (selectedValue: string | number): void => {
    if (typeof selectedValue === 'number') {
      this.cardValue.type = 'number';
    } else {
      this.cardValue.type = selectedValue;
    }
    this.cardValue.value = selectedValue.toString();

  }
  navigateToStorySelection = (): void => {
    this.router.navigate(['/home/story-selection']);
  }
}
