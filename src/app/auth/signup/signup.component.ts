import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  signUp(f: NgForm){
    console.log('tapped');
  }
}
