import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginInfoService } from 'src/app/services/login-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public role: string;
  public userName: string;
  public cardValue: string;

  constructor(private loginService: LoginInfoService) { }

  ngOnInit(): void {
    this.userName = this.loginService?.user?.name;
    this.role = this.loginService?.user?.role;

  }
  public cardSelection(selectedValue: string): void {
    this.cardValue = selectedValue ;

  }
}
