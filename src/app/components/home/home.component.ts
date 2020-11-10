import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from 'src/app/services/login-info.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';

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
  constructor(private loginService: LoginInfoService) { }
  signOutIcon = faSignOutAlt;
  ngOnInit(): void {
    this.user = this.loginService?.user?.name;
    this.items = [
      { label: 'Computer' },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

}
