import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-story-selection',
  templateUrl: './story-selection.component.html',
  styleUrls: ['./story-selection.component.scss']
})
export class StorySelectionComponent implements OnInit {
  adminForm: FormGroup;
  constructor(private fb: FormBuilder) { }

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

}
