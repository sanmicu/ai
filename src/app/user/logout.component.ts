import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  template:``
})
export class LogoutComponent {

  constructor(private router: Router) {
      if (sessionStorage.getItem('currentUser')){
       sessionStorage.removeItem('currentUser');
      }
      this.router.navigate(['/']);
  }

}
