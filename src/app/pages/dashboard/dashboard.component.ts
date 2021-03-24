import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LinkUrls } from 'src/app/models/models';
import { DialogviewComponent } from '../dialogview/dialogview.component';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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

  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  // openBottomSheet(): void {
  //   this._bottomSheet.open(InvestsheetmenuComponent).afterDismissed();
  // }

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
