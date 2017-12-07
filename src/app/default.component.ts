import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-default',
 templateUrl: './default.component.html'
})
export class DefaultComponent{
  private isLogged:boolean = false;
  private isImgUploaded:boolean = false;
  user:string;
  constructor(private router: Router){
     if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('currentUser').indexOf("|") != -1){
       const [username, password] = sessionStorage.getItem('currentUser').split('|');
       this.user = username;
       this.isLogged = true;
      }

    if (sessionStorage.getItem('img')) this.isImgUploaded = true;


  }

 @HostListener('mousemove')  onmousemove(){
    if (sessionStorage.getItem('img')){
          this.router.navigate([sessionStorage.getItem('img')]);
          sessionStorage.removeItem('img');
    }

  }

}


