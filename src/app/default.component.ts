import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  template: `
  <div class="bs-callout bs-callout-info" style="text-align:center;position:center;cursor:pointer;">
    <h2 class="display-2">Witaj na stronie Inwentaryzacja sprzętu</h2>
    <img src="/assets/images/lock.png"  title="Zaloguj się" alt="Zaloguj się">
    <h3 class="lead">Aby móc korzystać z inwentarza, zaloguj się.</h3>
  </div>
  `
})
export class DefaultComponent  {
}
