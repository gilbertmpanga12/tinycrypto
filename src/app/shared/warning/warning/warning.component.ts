import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actions } from 'src/app/models/models';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {
  operation : string;
  constructor(@Inject(MAT_DIALOG_DATA) public action: {action: string}) {
    this.operation =  this.action.action;
   }

  ngOnInit(): void {
  }

  submitAction(): void{

  }
}
