import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm:FormGroup;

  constructor(private _fb:FormBuilder) {
    this.loginForm=this._fb.group(
      {
        user:['Sunanda',[Validators.required,Validators.pattern("[A-Za-z0-9]{3,}[@]{1}[A-Za-z0-9]{3,}[.]{1}[A-Za-z0-9]{2,}")]],
        password:['123',[Validators.required]]
      }
    );

   }


onSave(data){
  console.log(data);
}

  ngOnInit() {
  }

}
