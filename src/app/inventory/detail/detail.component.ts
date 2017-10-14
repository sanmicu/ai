import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { LocationService } from '../location/location.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  @Input() selectedItem: Item;

  constructor(/*private locationService: LocationService*/) { }

  ngOnInit() {
    //this.locationService.addLocations(this.selectedItem.locations);
  }



}
