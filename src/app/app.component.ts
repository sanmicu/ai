import { Component } from '@angular/core';
import { Item } from './inventory/item';
import { InventoryService } from './inventory/inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    items: Item[];

constructor(private inventoryService: InventoryService) { 
    this.items = this.inventoryService.getItems();
  }
  
}
