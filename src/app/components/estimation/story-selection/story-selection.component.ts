import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-selection',
  templateUrl: './story-selection.component.html',
  styleUrls: ['./story-selection.component.scss']
})
export class StorySelectionComponent implements OnInit {
  adminForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      storyName: ['', Validators.required]
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
