import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DefaultComponent } from './default.component';
import { InventoryDefaultComponent } from './inventory/inventory-default.component';
import { DetailComponent } from './inventory/detail/detail.component';
import { EditComponent } from './inventory/edit/edit.component';
import { RegisterComponent } from './user/register.component';
import { LoginComponent } from './user/login.component';
import { LogoutComponent } from './user/logout.component';
import { SummaryComponent } from './inventory/summary/summary.component';

import { AuthGuard } from './user/auth.guard';

export const routes: Routes = [
  { path: '', component: DefaultComponent },
  {
    path: 'inwentarz',
    component: InventoryComponent,
    children: [
      { path: '', component: InventoryDefaultComponent, canActivate: [AuthGuard] }, 
      { path: 'dodaj', component: EditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: DetailComponent, canActivate: [AuthGuard] },
      { path: ':id/edytuj', component: EditComponent, canActivate: [AuthGuard] } 
    ]
  },
  { path: 'zestawienie', component: SummaryComponent,  canActivate: [AuthGuard]},
  { path: 'rejestracja', component: RegisterComponent},
  { path: 'logowanie', component: LoginComponent},
  { path: 'wylogowanie', component: LogoutComponent}
];
