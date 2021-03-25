import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LinkUrls } from 'src/app/models/models';
import { DialogviewComponent } from '../dialogview/dialogview.component';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  deviceMatches!: boolean;
  features: LinkUrls[] = [
    {
      name: 'Your Portfolio',
      icon: '',
      url: '',
      currency: '$'
    },
    {
      name: 'Bitcoin',
      icon: '',
      url: '',
      currency: ''
    }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        this.deviceMatches  = result.matches;
        return this.deviceMatches;
      }),
      shareReplay()
    );

  constructor(
    public dialog: MatDialog, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogviewComponent, {
      width: '100%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
