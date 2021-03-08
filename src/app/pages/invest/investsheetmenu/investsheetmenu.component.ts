import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
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
  enabled: string = 'enabled';
  auto_alerts: boolean = true;
  alertFormGroup: FormGroup;
  constructor(private _bottomSheetRef: MatBottomSheetRef<InvestComponent>,
     public dialog: MatDialog, private _fb: FormBuilder) {
      this.alertFormGroup = this._fb.group({
        auto_alerts: [true]
      });
      }

  ngOnInit(): void {
    
  }

  changeAlertSettings(checkedValue: any){
    if(checkedValue){
      this.alertFormGroup.setValue({auto_alerts: false});
      // do something
      return;
    }
     this.alertFormGroup.setValue({auto_alerts: true});
     // do something
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
