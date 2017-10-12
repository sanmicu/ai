import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item'

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html'
})
export class InventoryItemComponent implements OnInit {
  @Input() item: Item;
  itemId: number;

  constructor() { }

  ngOnInit() {
  }

}
