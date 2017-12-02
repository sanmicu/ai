import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Router, Routes, RouterOutlet } from "@angular/router";
import { Angular2TokenService  } from 'angular2-token';
import { FileUploader, FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import { Md5 } from 'ts-md5/dist/md5';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryItemComponent } from './inventory/inventory-list/inventory-item.component';
import { DetailComponent } from './inventory/detail/detail.component';
import { LocationAddComponent } from './inventory/location/location-add.component';
import { DropdownDirective } from './dropdown.directive';
import { InventoryService } from './inventory/inventory.service';
import { LocationService } from './inventory/location/location.service';
import { DefaultComponent } from './default.component';
import {routes} from './app.routes';
import { InventoryDefaultComponent } from './inventory/inventory-default.component';
import { EditComponent } from './inventory/edit/edit.component';
import { RegisterComponent } from './user/register.component';
import { LoginComponent } from './user/login.component';
import { UserService } from './user/user.service';
import { AuthGuard } from './user/auth.guard';
import { LogoutComponent } from './user/logout.component';
import { SummaryComponent } from './inventory/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InventoryComponent,
    InventoryListComponent,
    InventoryItemComponent,
    DetailComponent,
    LocationAddComponent,
    DropdownDirective,
    DefaultComponent,
    InventoryDefaultComponent,
    EditComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    SummaryComponent,
    GoogleChart
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileUploadModule,
    HttpModule,
    RouterModule,
    RouterTestingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBdk0PDffbHCf0Q3Rb5R6TuwIcnSRNDjHo'})

  ],
  providers: [InventoryService, LocationService, UserService, AuthGuard, LoginComponent, RouterOutlet, FormBuilder, Md5],
  bootstrap: [AppComponent]
})
export class AppModule { }
