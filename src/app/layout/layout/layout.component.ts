import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Sidebar } from 'src/app/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  title = environment.title;
  deviceMatches!: boolean;
  links: Sidebar[] = [{
    name: 'Your Porfolio',
    icon: 'home',
    url: '/'
  }, 
    {name: 'Profile & Settings',
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
/*
{
    name: 'Unions',
    icon: 'groups',
    url: '/unions'
  }, 
*/
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        this.deviceMatches  = result.matches;
        return this.deviceMatches;
      }),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  navigate(event:any, route: string){
    if(this.deviceMatches) event.close();
    this.router.navigate([route]);
  }

  

}
