import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInfoService } from 'src/app/services/login-info.service';
import { Avtar } from 'src/app/types/custom.types';
import { IUser } from 'src/app/types/user.interface';

@Component({
  selector: 'app-avtar',
  templateUrl: './avtar.component.html',
  styleUrls: ['./avtar.component.scss']
})
export class AvtarComponent implements OnInit {

  avtarForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginInfoService) { }

  ngOnInit(): void {
    this.avtarForm = this.fb.group({
      displayName: ['', Validators.required],
      avtarRole: ['DEV']
    });
  }
  isFieldInvalid(field: string): boolean {
    return (
      (!this.avtarForm.get(field).valid && this.avtarForm.get(field).touched) ||
      (this.avtarForm.get(field).untouched)
    );
  }

  public toDashboard(): void {

    const selctedAvtar = this.avtarForm.get('avtarRole').value as Avtar;

    const userObject: IUser = {
      role: selctedAvtar,
      name: this.avtarForm.get('displayName').value
    };
    this.loginService.user = userObject;
    console.log( Avtar.SL.toString());
    switch (selctedAvtar.toString()) {
      case 'SL':
        this.router.navigate(['/home/dashboard-admin']);
        break;
      case 'PO':
        this.router.navigate(['/home/dashboard-po']);
        break;
      default:
        this.router.navigate(['/home/dashboard']);
        break;
    }
  }

}
