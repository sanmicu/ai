import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
 templateUrl: './default.component.html'
})
export class DefaultComponent {
  private isLogged:boolean = false;
  user:string;
  constructor(){
     if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('currentUser').indexOf("|") != -1){
       const [username, password] = sessionStorage.getItem('currentUser').split('|');
       this.user = username;
       this.isLogged = true;
      }
  }

}


