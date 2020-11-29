import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SessionInformationService } from './services/session-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'static';
  loading: Observable<boolean>;

  /**
   *
   */
  constructor(
    private router: Router,
    private sessionInformationService: SessionInformationService
  ) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart:
          this.loading = of(true);
          break;
        case event instanceof NavigationCancel:
        case event instanceof NavigationEnd:
        case event instanceof NavigationError: {
          this.loading = of(false);
          break;
        }
        default:
          break;
      }
    });

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = this.sessionInformationService.showLoaderSubject;
    }, 2000);

  }
}
