import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from '../item';
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html'
})
export class InventoryListComponent implements OnInit {
  items: Item[] =[];
  @Output() itemSelected = new EventEmitter<Item>();
  item_1 = new Item('Krzesło',25,'B','304','/assets/images/items/krzeslo.jpg');
  item_2 = new Item('biurko',5,'A','115','https://0.allegroimg.com/s400/017aa4/ad67ccbf4aad9b43906b26724d40');

  constructor() { }

  ngOnInit() {
  }

  onSelected(item: Item){
    this.itemSelected.emit(item);
  }

}
