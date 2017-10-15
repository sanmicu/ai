import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Rx";

import { Item } from '../item';
import { LocationService } from '../location/location.service';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit, OnDestroy {
  selectedItem: Item;
  private itemIndex: number;
  private subscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private invService: InventoryService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.itemIndex = params['id'];
        this.selectedItem = this.invService.getItem(this.itemIndex);
      }
    )
  }

  onEdit(){
    this.router.navigate(['/inwentarz', this.itemIndex, 'edytuj'])
  }

  onDelete(){
    this.invService.deleteItem(this.selectedItem);
    this.router.navigate(['/inwentarz']);

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
