import { Component, Output, OnInit } from '@angular/core';
import { Item } from '../item';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html'
})
export class InventoryListComponent implements OnInit{
   items: Item[];
 
  constructor(private iS: InventoryService) { 
     this.items = this.iS.getItems();

     this.iS.postItemsAPI().subscribe(
      data => console.log(data),
      error => console.error(error)
    );

     this.items = this.iS.getItems();
     //console.log('push');
  }

  ngOnInit(){
     
    
  }

}

