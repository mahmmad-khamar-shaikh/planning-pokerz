import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-avtar',
  templateUrl: './avtar.component.html',
  styleUrls: ['./avtar.component.scss']
})
export class AvtarComponent implements OnInit {

  avtarForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.avtarForm = this.fb.group({
      displayName: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string): boolean { // {6}
    return true;
    // return (
    //   (!this.form.get(field).valid && this.form.get(field).touched) ||
    //   (this.form.get(field).untouched && this.formSubmitAttempt)
    // );
  }

}
