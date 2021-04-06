import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actions } from 'src/app/models/models';

import { WarningComponent } from 'src/app/shared/warning/warning/warning.component';

@Component({
  selector: 'app-dialogview',
  templateUrl: './dialogview.component.html',
  styleUrls: ['./dialogview.component.scss']
})
export class DialogviewComponent implements OnInit {
  hide = true;
  defaultSymbol: string = '$';
  tradeOperation: boolean;
  togglePurchase: boolean = false;
  sellGroup: FormGroup;
  buyGroup: FormGroup;
  finalTotalBtcConverted: string = '0';
  availableBtcTotal: string = '0';
  currencies: {name: string, symbol:string}[] = [
    {name: 'USD', symbol: '$'},
    {name: 'UGX', symbol: 'UGX'},
    {name: 'GDB', symbol: '£'},
    {name: 'EUR', symbol: '€'}
  ];
  currency: string = 'UGX';
  constructor(public dialogRef: MatDialogRef<DialogviewComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {trade: boolean}, 
    private _fb: FormBuilder, private dialog: MatDialog) {
      this.tradeOperation = this.data.trade;
      this.sellGroup = this._fb.group({
        amount: [''],
        currency: ['']
      });

      this.buyGroup = this._fb.group({
        amount: [''],
        currency: ['']
      });
     }

  ngOnInit(): void {
    this.sellGroup.get('amount')?.valueChanges.subscribe(amount => {
      if(amount){
        this.finalTotalBtcConverted = amount;
      }else{
        this.finalTotalBtcConverted = '0';
      }
    });

    this.buyGroup.get('amount')?.valueChanges.subscribe(amount => {
      if(amount){
        this.availableBtcTotal = amount;
      }else{
        this.availableBtcTotal = '0';
      }
    });
  }


  undoPurchase(): void{
    this.tradeOperation = true;
    this.togglePurchase = false;
  }

  setPurchase(): void{
    this.tradeOperation = false;
    this.togglePurchase = true;
  }

  buyBtc(): void{
    this.dialog.open(WarningComponent, {data: {action: Actions.Buying}});
  }

}
