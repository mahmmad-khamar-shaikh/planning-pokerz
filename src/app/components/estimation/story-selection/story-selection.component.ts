import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionInformationService } from 'src/app/services/session-information.service';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-story-selection',
  templateUrl: './story-selection.component.html',
  styleUrls: ['./story-selection.component.scss']
})
export class StorySelectionComponent implements OnInit {
  adminForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sessionInformationService: SessionInformationService,
    private storyService: StoryService

  ) { }

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      storyName: [this.sessionInformationService.getSessionInformation.currentStory || '', Validators.required]
    });
    this.storyService.currentStoy(this.sessionInformationService.getSessionInformation.currentStoryId)
      .valueChanges().subscribe(data => {
        console.log(`data ${data}`);
      });
  }
  isFieldInvalid(field: string): boolean {
    return (
      (!this.adminForm.get(field).valid && this.adminForm.get(field).touched) ||
      (this.adminForm.get(field).untouched)
    );
  }

  goBackToBoard = () => {
    this.router.navigate(['/home/dashboard-admin']);
  }
  startEstimation = () => {

    this.goBackToBoard();
  }
  closeEstimation = () => {
    this.goBackToBoard();
  }
}
