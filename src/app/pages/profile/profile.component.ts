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
  folders: Section[] = [
    {
      name: 'Auto Investments',
      updated: new Date('1/1/16'),
      icon: 'savings'
    },
    {
      name: 'Change Username',
      updated: new Date('1/17/16'),
      icon: 'account_circle'
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
      icon: 'work'
    }
  ];
  notes: Section[] = [
    {
      name: 'Change Password',
      updated: new Date('2/20/16'),
      icon: 'password'
    },
    {
      name: 'Download Private Key',
      updated: new Date('1/18/16'),
      icon: 'vpn_key'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
