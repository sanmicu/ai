import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DefaultComponent } from './default.component';
import { InventoryDefaultComponent } from './inventory/inventory-default.component';
import { DetailComponent } from './inventory/detail/detail.component';
import { EditComponent } from './inventory/edit/edit.component';

export const routes: Routes = [
  { path: '', component: DefaultComponent },
  {
    path: 'inwentarz',
    component: InventoryComponent,
    children: [
      { path: '', component: InventoryDefaultComponent }, 
      { path: 'dodaj', component: EditComponent },
      { path: ':id', component: DetailComponent },
      { path: ':id/edytuj', component: EditComponent } 
    ]
  },
];
