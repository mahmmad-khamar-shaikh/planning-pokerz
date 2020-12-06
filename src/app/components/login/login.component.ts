import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { faGithub, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { SessionInformationService } from 'src/app/services/session-information.service';
import { IUser } from 'src/app/types/user.interface';

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
    private authService: AuthService,
    private sessionInformationService: SessionInformationService,
    private snackBar: MatSnackBar
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

    this.snackBar.open('Welcome to Scrum Cermony', '', { duration: 2000 });
    this.router.navigate(['/home']);
  }
  onSubmit(): void {
    // To be Implemented

  }

  loginWithGoogle(): void {
    this.authService.googleSignin()
      .then((data) => {
        this.snackBar.open('Welcome to Scrum Cermony', '', { duration: 2000 });
        this.setUserSessionData(data);
        this.router.navigate(['/home']);
      })
      .catch(err => {
        this.snackBar.open(`Error Connectiing to your google account.`, '', { duration: 2000 });
        console.log(`error => ${err}`);
      });
  }
  loginWithGithub(): void {
    this.authService.githubSignin()
      .then((data) => {
        this.setUserSessionData(data);
        this.router.navigate(['/home']);
      })
      .catch(err => {
        this.snackBar.open(`Error Connectiing to your GitHub account.`, '', { duration: 2000 });
        console.log(`error => ${err}`);
      });
  }

  loginWithMS(): void {
    this.authService.microsoftSignin()
      .then((data) => {
        this.setUserSessionData(data);
        this.router.navigate(['/home']);
      });
  }

  setUserSessionData(data): void {
    const userObject: IUser = {
      displayName: data.user.displayName,
      email: data.user.email,
      photoURL: data.user.photoURL,
      uid: data.user.uid,
    };
    this.sessionInformationService.setUserInformation = userObject;

  }

}
