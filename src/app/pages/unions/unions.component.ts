import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unions',
  templateUrl: './unions.component.html',
  styleUrls: ['./unions.component.scss']
})
export class UnionsComponent implements OnInit {
  unions: any[] = [{
    name : 'WallStreetBets',
    description: 'Dodge to the moon',
    amount: '5000',
    image: 'assets/dodge.jpg'
  },
  {
    name : 'WallStreetBets',
    description: 'Dodge to the moon',
    amount: '5000',
    image: 'assets/dodge.jpg'
  }, {
    name : 'WallStreetBets',
    description: 'Dodge to the moon',
    amount: '5000',
    image: 'assets/dodge.jpg'
  },{
    name : 'WallStreetBets',
    description: 'Dodge to the moon',
    amount: '5000',
    image: 'assets/dodge.jpg'
  }, {
    name : 'WallStreetBets',
    description: 'Dodge to the moon',
    amount: '5000',
    image: 'assets/dodge.jpg'
  }];
  constructor() { }

  ngOnInit(): void {
  }


}


