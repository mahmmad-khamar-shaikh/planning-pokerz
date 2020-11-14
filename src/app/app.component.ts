import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'static';
  loading = false;

  /**
   *
   */
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart:
          this.loading = true;
          console.log('inside navigation start');
          break;
        case event instanceof NavigationCancel:
        case event instanceof NavigationEnd:
        case event instanceof NavigationError: {
          this.loading = false;
          console.log('inside navigation end');
          break;
        }
        default:
          break;
      }
    });

  }
}
