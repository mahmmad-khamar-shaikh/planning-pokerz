import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from 'src/app/services/login-info.service';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: string;
  constructor(private loginService: LoginInfoService) { }
  signOutIcon = faSignOutAlt;
  ngOnInit(): void {
    this.user = this.loginService?.user?.name;
  }

}
