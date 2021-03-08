import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogview',
  templateUrl: './dialogview.component.html',
  styleUrls: ['./dialogview.component.scss']
})
export class DialogviewComponent implements OnInit {
  hide = true;
  currencies: string[] = ['UGX', 'USD', 'GBP', 'EUR'];
  currency: string = 'UGX';
  constructor() { }

  ngOnInit(): void {
  }

}
