import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  p={
    'email':'',
    'psw':'Sunanda'
  }
  onSave(d){
    console.log(d['email']);
  }
  constructor() { }

  ngOnInit() {
  }

}
