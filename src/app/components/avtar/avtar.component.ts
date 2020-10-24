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
      displayName: ['', Validators.required]
    });
  }
  isFieldInvalid(field: string): boolean {
    return (
      (!this.avtarForm.get(field).valid && this.avtarForm.get(field).touched) ||
      (this.avtarForm.get(field).untouched)
    );
  }

  public toDashboard(avtar: Avtar): void {
    const userObject: IUser = {
      role: avtar,
      name: this.avtarForm.get('displayName').value
    };
    this.loginService.user = userObject;
    switch (avtar) {
      case Avtar.SL:
        this.router.navigate(['/home/dashboard-admin']);
        break;
      case Avtar.PO:
        this.router.navigate(['/home/dashboard-po']);
        break;
      default:
        this.router.navigate(['/home/dashboard']);
        break;
    }
  }

}
