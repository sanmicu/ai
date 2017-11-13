import { Component, Output, OnInit } from '@angular/core';
import { Item } from '../item';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html'
})
export class InventoryListComponent implements OnInit{
   items: Item[];
 
  constructor(private inventoryService: InventoryService) { 
    //console.log(this.items);
  }

  ngOnInit(){
      this.items = this.inventoryService.getItems();
  }

}

