import { Injectable } from '@angular/core';
import { ObjectMapper } from 'json-object-mapper';
import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
private users: User[];
result:any;
pom:boolean=true;

constructor(private _http: Http) {
   this.getUsersAPI()
      .subscribe(res => this.users = res);  
   }

  getUsers() {
      return this.users;
  }

  getUsersAPI() {
    return this._http.get("/api/users")
      .map(result => result.json().data);
  }

   registerUserAPI(user: User) {
    const body = JSON.stringify(user);  
    const headers = new Headers({
    'Content-Type': 'application/json'
    }); 
    return this._http.post('/api/users', body, {headers: headers});
  }


}
