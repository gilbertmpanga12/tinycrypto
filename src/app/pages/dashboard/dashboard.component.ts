import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { LinkUrls } from 'src/app/models/models';
import { DialogviewComponent } from '../dialogview/dialogview.component';
import { InvestsheetmenuComponent } from '../invest/investsheetmenu/investsheetmenu.component';


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

  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogviewComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openBottomSheet(): void {
    this._bottomSheet.open(InvestsheetmenuComponent).afterDismissed().subscribe(src => {
      this.openDialog();
    });
  }
}
