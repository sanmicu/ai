import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory/inventory.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private invService: InventoryService) { }

  ngOnInit() {
  }

  onSave(){
    this.invService.postItemsAPI().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }


}
