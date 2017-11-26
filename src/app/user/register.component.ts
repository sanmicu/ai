import { Component, OnInit, Output } from '@angular/core';
import {   FormGroup,
  AbstractControl,
  FormControl,
  Validators,
  FormBuilder,
  FormArray 
}
 from "@angular/forms";
import { Subscription } from "rxjs/Rx";
import { Md5 } from 'ts-md5/dist/md5';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    private users: User[]; 
    signupForm: FormGroup;
    error = false;
    errorMessage = '';
    private _password: string;
    pom: boolean = true;
    ifSuccess: boolean = true;
    registeredUser: string;
    isLogged: boolean = false;
    isLoggedAs: string;

  constructor(private fb: FormBuilder, private us:UserService, private md5: Md5) {
      this.us.getUsersAPI()
        .subscribe(res => this.users = res);  
      this.users = this.us.getUsers();  

    
      if (sessionStorage.getItem('currentUser')){
          const [username, password] = sessionStorage.getItem('currentUser').split('|');
          this.isLoggedAs = username;
          this.isLogged = true;
      }
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
        login: ['', Validators.compose([
            Validators.required,
            this.isLong,
            this.haveSeperator
        ])],
        password: ['', Validators.compose([
            Validators.required,
            this.isLong,
            this.haveSeperator
        ])],
        confirmPassword: ['', Validators.compose([
            Validators.required,
            this.isEqualPassword.bind(this)
        ])],
        pin: ['', Validators.compose([
            Validators.required,
             this.correctPIN
        ])],
    });
  }

  isEqualPassword(control: FormControl): {[s: string]: boolean} {
    if (!this.signupForm) {
          return {passwordsNotMatch: true};

    }
    if (control.value !== this.signupForm.controls['password'].value) {
          return {passwordsNotMatch: true};
    }
  }

 haveSeperator(control: FormControl): {[s: string]: boolean} {
     //if (!control.value.match(/^\w+@[a-zA-Z_0-9]+?\.[a-zA-Z]{2,3}$/)) {
        if (control.value.match(/.*[|].*/)) {
            return {noEmail: true};
        }
    }

 correctPIN(control: FormControl): {[s: string]: boolean} {
        if (control.value != 5541) {
            return {incorrectPIN: true};
        }
    }

  isLong(control: FormControl): {[s: string]: boolean} {
     if (control.value.length < 7) {
            return {isLong: true};
     }
   }


  onSignup(){   
    this.pom = false;
    for (var i=0; i<this.users.length; i++)
        if (this.signupForm.controls['login'].value == this.users[i].login)
            {this.pom = true;this.ifSuccess = false;}   

    if (!this.pom){
        this.registeredUser = this.signupForm.controls['login'].value;
        this.md5.start();
        this.signupForm.controls['password'].setValue(this.md5.appendStr(this.signupForm.controls['password'].value).end());
        this.signupForm.controls['confirmPassword'].setValue("OK");
        this.signupForm.controls['pin'].setValue("OK");
        var only_once = true;
        if (only_once){
        this.us.registerUserAPI(this.signupForm.value).subscribe(
            data => console.log(data),
            error => console.error(error)
        );  
        }
        only_once = false;

        //this.users = this.us.getUsers();
        this.signupForm.controls['password'].setValue("");
        this.signupForm.controls['confirmPassword'].setValue("");
        this.signupForm.controls['pin'].setValue("");

        this.ifSuccess = true;
    }

  }

}
