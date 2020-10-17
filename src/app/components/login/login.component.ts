import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  public isError = false;
  public customErrorMessage: string;
  private formSubmitAttempt: boolean; // {2}

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }
  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  isFieldInvalid(field: string): boolean { // {6}
    return (
      (!this.loginFormGroup.get(field).valid && this.loginFormGroup.get(field).touched) ||
      (this.loginFormGroup.get(field).untouched && this.formSubmitAttempt)
    );
  }
  login(): void {
    // console.log(this.loginFormGroup.get('userName').value);
    // console.log(this.loginFormGroup.get('password').value);
    // this.loginService.User = {
    //   email: this.loginFormGroup.get('userName').value,
    //   id: 1
    // };
    this.router.navigate(['/home']);
  }
  onSubmit(): void {
    // To be Implemented

  }

}
