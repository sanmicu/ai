import { Component, OnInit } from '@angular/core';
import {   FormGroup,
  AbstractControl,
  FormControl,
  Validators,
  FormBuilder,
  FormArray 
}
 from "@angular/forms";
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/add/operator/debounceTime';

import { UserService } from './user.service';
import { User } from './user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  error = false;
  errorMessage = '';
  private users: User[]; 
  pom:boolean=true;
  ifSuccess: boolean = true;
  isLogged: boolean = false;
  isLoggedAs: string;

  constructor(private fb: FormBuilder,private us:UserService, private md5: Md5 ) {
    this.us.getUsersAPI()
      .subscribe(res => this.users = res);  
    this.users = this.us.getUsers();     

      if (sessionStorage.getItem('currentUser')){
          const [username, password] = sessionStorage.getItem('currentUser').split('|');
          this.isLoggedAs = username;
          this.isLogged = true;
      }
  }

  ngOnInit(){
    this.signupForm = this.fb.group({
        login: ['', Validators.compose([
            Validators.required,
            this.isLong
        ])],
        password: ['', Validators.compose([
            Validators.required,
            this.isLong
        ])],
    });
  }

   isLong(control: FormControl): {[s: string]: boolean} {
     if (control.value.length < 7) {
            return {isLong: true};
     }
   }

  onSignin(){
    this.md5.start();
    let passHash = this.md5.appendStr(this.signupForm.controls['password'].value).end();
    let token = this.signupForm.controls['login'].value + "|" + this.signupForm.controls['password'].value;
      for (var i=0; i<this.users.length; i++){
        if (this.signupForm.controls['login'].value == this.users[i].login && passHash == this.users[i].password){
              this.pom = false;
              this.ifSuccess = true;  
              sessionStorage.setItem('currentUser', token);
              window.location.href='#';
          }
          else {this.ifSuccess = false;}
      }
      passHash = ""; 
    }
}
