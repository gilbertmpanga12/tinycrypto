import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LinkUrls } from 'src/app/models/models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  title = environment.title;

  links: LinkUrls[] = [{
    name: 'Your Porfolio',
    icon: 'home',
    url: '/'
  }, {
    name: 'Invest',
    icon: 'savings',
    url: '/invest'
  }, {
    name: 'Unions',
    icon: 'groups',
    url: '/unions'
  }, {
    name: 'Profile & Settings',
    icon: 'account_box',
    url: '/profile'
  }
];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
