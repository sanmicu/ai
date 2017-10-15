import { Component, OnInit, Output } from '@angular/core';
import { Item } from '../item';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html'
})
export class InventoryListComponent implements OnInit {
  items: Item[] =[];
  
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.items = this.inventoryService.getItems();
  }
  
}
