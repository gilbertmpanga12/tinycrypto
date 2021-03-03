import { Component, OnInit } from '@angular/core';

interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-unions',
  templateUrl: './unions.component.html',
  styleUrls: ['./unions.component.scss']
})
export class UnionsComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }


}


