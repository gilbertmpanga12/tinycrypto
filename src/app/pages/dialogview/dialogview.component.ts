import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogview',
  templateUrl: './dialogview.component.html',
  styleUrls: ['./dialogview.component.scss']
})
export class DialogviewComponent implements OnInit {
  hide = true;
  defaultSymbol: string = '$';
  tradeOperation: boolean;
  currencies: {name: string, symbol:string}[] = [
    {name: 'USD', symbol: '$'},
    {name: 'UGX', symbol: 'UGX'},
    {name: 'GDB', symbol: '£'},
    {name: 'EUR', symbol: '€'}
  ];
  currency: string = 'UGX';
  constructor(public dialogRef: MatDialogRef<DialogviewComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {trade: boolean}) {
      this.tradeOperation = this.data.trade;
     }

  ngOnInit(): void {
    
  }



}
