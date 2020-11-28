import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from 'src/app/services/login-info.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { SessionInformationService } from 'src/app/services/session-information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: string;
  items: MenuItem[];
  home: MenuItem;
  isExpanded = false;
  constructor(
    private loginService: LoginInfoService,
    private router: Router,
    private sessionInformationService: SessionInformationService
  ) {

  }
  signOutIcon = faSignOutAlt;
  ngOnInit(): void {
    this.user = this.loginService?.user?.name;
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
  logout(): void {
    this.sessionInformationService.clearSessionObject();
    this.router.navigate(['/login/signin']);
  }

}
