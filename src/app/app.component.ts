import { Component } from '@angular/core';
import { Item } from './inventory/item';
import { InventoryService } from './inventory/inventory.service';
import { User } from './user/user';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    items: Item[];
    users: User[];

constructor(private inventoryService: InventoryService, private userService: UserService) { 
    this.items = this.inventoryService.getItems();
    this.users = this.userService.getUsers();
  }

  
  
}
