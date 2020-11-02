import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faGithub, faGoogle, faMicrosoft} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  public isError = false;
  public customErrorMessage: string;
  private formSubmitAttempt: boolean;
  githubIcon = faGithub;
  googleIcon = faGoogle;
  microsoftIcon = faMicrosoft;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }
  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  isFieldInvalid(field: string): boolean {
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
