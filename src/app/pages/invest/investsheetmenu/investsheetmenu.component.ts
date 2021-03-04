import {Component, OnInit} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { DialogviewComponent } from '../../dialogview/dialogview.component';
import { InvestComponent } from '../invest.component';


@Component({
  selector: 'app-investsheetmenu',
  templateUrl: './investsheetmenu.component.html',
  styleUrls: ['./investsheetmenu.component.scss']
})
export class InvestsheetmenuComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<InvestComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    this.openDialog();
    event.preventDefault();
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
}
