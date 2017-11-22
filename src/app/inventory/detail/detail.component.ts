import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Rx";

import { Item } from '../item';
import { Location } from '../location';
import { LocationService } from '../location/location.service';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit, OnDestroy {
  selectedItem: Item;

  private itemIndex: number;
  private indexOfLocation: number;
  private subscription: Subscription;
  private result_pom: number;
  
  constructor(private router: Router, private route: ActivatedRoute, private invService: InventoryService, private locService: LocationService) {
   
  }


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

  onDelete(index: number){
    this.invService.deleteItem(this.selectedItem);

    this.invService.postItemsAPI().subscribe(
      data => console.log(data),
      error => console.error(error)
    );

    this.router.navigate(['/inwentarz']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
