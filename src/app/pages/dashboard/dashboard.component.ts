import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { LinkUrls } from 'src/app/models/models';
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

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(InvestsheetmenuComponent);
  }
}
