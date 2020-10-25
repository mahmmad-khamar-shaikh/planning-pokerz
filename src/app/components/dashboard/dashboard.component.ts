import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from 'src/app/services/login-info.service';
import { ICardValue } from 'src/app/types/shared.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public role: string;
  public userName: string;
  public cardValue: ICardValue = { type: '', value: '' };
  public storyNumber: string;
  public arrayStoryNumber = ['2', '3', '5', '8', '13'];

  constructor(private loginService: LoginInfoService) { }

  ngOnInit(): void {
    this.userName = this.loginService?.user?.name;
    this.role = this.loginService?.user?.role.toString();
    this.storyNumber = 'test010';

  }
  public cardSelection(selectedValue: string | number): void {
    if (typeof selectedValue === 'number') {
      this.cardValue.type = 'number';
    } else {
      this.cardValue.type = selectedValue;
    }
    this.cardValue.value = selectedValue.toString();

  }
}
