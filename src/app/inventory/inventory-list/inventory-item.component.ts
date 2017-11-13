import { Component, Input } from '@angular/core';
import { Item } from '../item'

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html'
})
export class InventoryItemComponent  {
  @Input() item: Item;
  @Input() _id: number = 1;


}
