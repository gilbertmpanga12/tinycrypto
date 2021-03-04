import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  hide: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  signIn(f: NgForm){
    console.log('tapped');
  }

}
