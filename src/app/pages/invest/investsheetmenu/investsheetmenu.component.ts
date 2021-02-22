import {Component, OnInit} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { InvestComponent } from '../invest.component';


@Component({
  selector: 'app-investsheetmenu',
  templateUrl: './investsheetmenu.component.html',
  styleUrls: ['./investsheetmenu.component.scss']
})
export class InvestsheetmenuComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<InvestComponent>) { }

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
