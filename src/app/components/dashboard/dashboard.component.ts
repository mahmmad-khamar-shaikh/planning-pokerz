import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MeetingService } from 'src/app/services/meeting.service';
import { SessionInformationService } from 'src/app/services/session-information.service';
import { StoryService } from 'src/app/services/story.service';
import { UtilService } from 'src/app/services/util.service';
import { ICardValue, IEstimation, IMeeting } from 'src/app/types/shared.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  public isMeetingLive: false;
  public ceremonyId: string;
  private currentEstimationId: string;


  constructor(
    private sessionInformationService: SessionInformationService,
    private meetingService: MeetingService,
    private utilService: UtilService,
    private storyService: StoryService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.userName = this.sessionInformationService.getUserInformation.name;
    this.role = this.sessionInformationService?.getUserInformation?.role?.toString();
    this.isStoryButtonDisabled = this.role?.toString() !== 'SL';
    this.ceremonyId = this.sessionInformationService.getSessionInformation.ceremonyId;



    this.meetingService.liveMeeting
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(this.utilService.dbToDomanEntity);
        })).subscribe(d => {
          d.map(t => {
            this.isMeetingLive = t.isMeetingLive;
            this.currentMeetingId = t.id;
            this.sessionInformationService.setMeeting = this.currentMeetingId;
            console.log(`Meeting ID ${t.id}`);
            console.log(`ceremony ID ${t.ceremonyId}`);
            this.storyService.currentStoy(t.id).snapshotChanges().pipe(map(actions => {
              return actions.map(this.utilService.dbToDomanEntity);
            })).subscribe(data => {
              let currentStoryFound = false;
              data.map(v => {
                console.log(`stories data arrived ${v.storyName}`);
                if (!v.isEstimationClosed) {
                  currentStoryFound = true;
                  this.storyNumber = v.storyName;
                  this.sessionInformationService.setCurrentStory = this.storyNumber;
                  this.sessionInformationService.setCurrentStoryId = v.id;

                  this.storyService.getEstimationForCurrentStoryAndUser(v.id, this.userName)
                    .snapshotChanges()
                    .pipe(
                      map(actions => {
                        return actions.map(this.utilService.dbToDomanEntity);
                      }))
                    .subscribe(estimationData => {
                      estimationData.map(e => {
                        console.log(`esitmation data for user arrirved ${e.id}`);
                        this.currentEstimationId = e.id;
                      });
                    });
                }
              });
              if (!currentStoryFound) {
                // reset story values
                this.storyNumber = '';
                this.sessionInformationService.setCurrentStory = '';
                this.sessionInformationService.setCurrentStoryId = '';
              }
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
  startEndMeeting(): void {
    if (this.isMeetingLive) {
      this.endMeeting();
    } else {
      this.startMeeting();
    }

  }
  navigateToStorySelection = (): void => {
    this.router.navigate(['/home/story-selection']);
  }

  startMeeting(): void {
    const meetingData: IMeeting = {
      teamId: this.sessionInformationService.getSessionInformation.teamId,
      ceremonyId: this.ceremonyId,
      meetingStartedDateTime: new Date(),
      endedBy: '',
      startedBy: this.sessionInformationService.getUserInformation.name,
      isMeetingLive: true,
    };
    this.meetingService.startMeeting(meetingData).then((docRef: DocumentReference) => {
      this.currentMeetingId = docRef.id;
      this.sessionInformationService.setMeeting = this.currentMeetingId;
    }).catch(err => {
      this.snackBar.open(`Error occured : ${err}`, '', { duration: 2000 });
    });
  }
  endMeeting(): void {
    if (!this.isMeetingLive) {
      return;
    }
    this.meetingService.endMeeting(this.currentMeetingId, this.sessionInformationService.getUserInformation.name);
    this.router.navigate(['/home/ceremony']);
  }

  public submitEsitmation(): void {
    const estimation: IEstimation = {
      storyId: this.sessionInformationService.getSessionInformation.currentStoryId,
      estimator: this.sessionInformationService.getUserInformation.name,
      estimation: this.cardValue.value
    };
    if (this.currentEstimationId) {
      this.storyService.updateEstimationForStory(this.currentEstimationId, this.cardValue.value);
    } else {
      this.storyService.addEstimationForStory(estimation)
        .then((success) => {
          console.log(`estimation added for ${success}`);
        })
        .catch(err => console.log(`error occured while storing estimation value for story ${this.sessionInformationService.getSessionInformation.currentStoryId}`));
    }
  }



}
