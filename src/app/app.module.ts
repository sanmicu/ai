import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InventoryComponent,
    InventoryListComponent,
    InventoryItemComponent,
    DetailComponent,
    LocationAddComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [InventoryService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
