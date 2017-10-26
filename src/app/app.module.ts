import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Router, Routes, RouterOutlet } from "@angular/router";


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
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterTestingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [InventoryService, LocationService, RouterOutlet, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
