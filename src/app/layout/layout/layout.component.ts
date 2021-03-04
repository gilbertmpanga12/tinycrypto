import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Sidebar } from 'src/app/models/models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  title = environment.title;

  links: Sidebar[] = [{
    name: 'Your Porfolio',
    icon: 'home',
    url: '/'
  }, {
    name: 'Unions',
    icon: 'groups',
    url: '/unions'
  }, {
    name: 'Profile & Settings',
    icon: 'manage_accounts',
    url: '/profile'
  },
  {
    name: 'History',
    icon: 'history',
    url: '/notifications'
  },
  {
    name: 'Log Out',
    icon: 'logout',
    url: '/auth/signin'
  }
];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
