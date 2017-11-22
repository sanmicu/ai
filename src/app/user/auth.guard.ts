import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { Http, Headers, RequestOptions } from '@angular/http';

import { UserService } from './user.service';
import { User } from './user';
@Injectable()
export class AuthGuard implements CanActivate {
  private users: User[]; 
  private users2: User[]; 
  pom: boolean = false;

  constructor(private router: Router, private md5:Md5, private us:UserService, private _http: Http) {
      if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('currentUser').indexOf("|") != -1){
        this.us.getUsersAPI()
          .subscribe(res => this.users = res);  
        this.users = this.us.getUsers();    
      }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('currentUser').indexOf("|") != -1){
        const [username, password] = sessionStorage.getItem('currentUser').split('|');
        this.md5.start();
        let passHash = this.md5.appendStr(password).end();
        
        for (var i=0; i<this.users.length; i++)
          if (username == this.users[i].login && passHash == this.users[i].password)
              return true;   
        passHash = "";   
      }
     else {
       this.router.navigate(['logowanie']);
       return false; 
     }
     
  }

  
}
