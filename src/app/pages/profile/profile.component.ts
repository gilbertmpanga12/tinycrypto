import { Component, OnInit } from '@angular/core';


interface Section {
  name: string;
  updated: Date;
  icon?: string;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currencies: string[] = ['UGX', 'USD', 'GBP', 'EUR'];
  currency: string = 'UGX';
  constructor() { }

  ngOnInit(): void {
  }

}
