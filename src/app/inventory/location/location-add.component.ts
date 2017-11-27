import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ReactiveFormsModule} 
  from "@angular/forms";
import {AgmCoreModule} from 'angular2-google-maps/core';

import { Location } from "../location";
import { LocationService } from "./location.service";
import { Item } from '../item';
import { InventoryService } from '../inventory.service';
import { Marker } from './marker';

@Component({
  selector: 'app-locations',
  templateUrl: './location-add.component.html'
})


export class LocationAddComponent implements OnInit {
  selectedItem: Item;
  private item: Item;
  private itemIndex: number;
  private subscription: Subscription;
  locationForm: FormGroup;
  locations: Array<any> = [];
  // google maps zoom level
  zoom: number = 17;
  // initial center position for the map
  lat: number = 50.0263882;
  lng: number = 21.9845842;

  private markers: Marker[]= [];
  private _marker: Marker;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private locService: LocationService, private invService: InventoryService) {
  }

    ngOnInit() {
      this.subscription = this.route.params.subscribe(
        (params: any) => {
          if (params.hasOwnProperty('id')) {
            this.itemIndex = params['id'];
            this.item = this.invService.getItem(this.itemIndex);
          } else {this.item=null}
          this.initForm();
        }
      );   
    }

  clickedMarker(label: string, index: number) {
     // console.log(`clicked the marker: ${label || index}`)
    }
       
  onAddLocation(quantity: number, building: string, room: string) {
    (<FormArray>this.locationForm.controls['locations']).push(
      new FormGroup({
        quantity: new FormControl(quantity, [Validators.required, Validators.min(1), Validators.max(1000)]),
        building: new FormControl(building.toUpperCase(), Validators.required),
        room: new FormControl(room.toUpperCase(), Validators.required),
      })
    );
  }

   onRemoveLocation(index: number) {
    (<FormArray>this.locationForm.controls['locations']).removeAt(index);
  }

  onSubmit(){
    const newItem = this.locationForm.value;
    this.invService.editItem(this.item, newItem);

    this.invService.postItemsAPI().subscribe(
      data => console.log(data),
      error => console.error(error)
    );

    this.invService.getItems();

   this.router.navigate(['inwentarz']);

  }
  
   onCancel() {
    this.router.navigate(['inwentarz']);
  }

  private initForm(){
    this.markers.splice(0);

    let itemName = '';
    let itemDescription = '';
    let itemImagePath = '';
    let itemLastMod='';
    let itemLocations: FormArray = new FormArray([]);
    
    if (this.item.hasOwnProperty('locations')) {
      for (let i = 0; i < this.item.locations.length; i++) {
        this.locations[i] = this.item.locations[i];
        let w1; let w2;
        let r1 = ((Math.random() * 0.0000800) + 0.0000001);
        let r2 = ((Math.random() * 0.0000500) + 0.0000301);
        switch (this.locations[i].building)
        {
          case 'A':
            w1=50.0268308 + r1; w2=21.9852123 + r2;
            break;
          case 'B':
            w1=50.0267851+ r1; w2=21.9844563+ r2;
            break;
          case 'C':
            w1=50.0262283+ r1; w2=21.9837789+ r2;
            break;
          case 'D':
            w1=50.0258283+ r1; w2=21.9837178+ r2;
            break;
          case 'E':
            w1=50.0263219+ r1; w2=21.9846742+ r2;
            break;
          case 'F':
            w1=50.0259665+ r1;w2=21.9835222+ r2;
            break;
          default: 
            break;
        }

        this._marker =  {
        lat: w1,
        lng: w2,
        label: this.locations[i].quantity + ", " + this.locations[i].building + ": " + this.locations[i].room,
        draggable: false
        };
   
        this.markers.push(this._marker);

        itemLocations.push(
          new FormGroup({
            quantity: new FormControl(this.item.locations[i].quantity, Validators.required),
            building: new FormControl(this.item.locations[i].building, Validators.required),
            room: new FormControl(this.item.locations[i].room, Validators.required),
          })
        );
      }
    }


    itemName = this.item.name;
    itemDescription =  this.item.description;
    itemImagePath =  this.item.imagePath;
    const [username, password] = sessionStorage.getItem('currentUser').split('|');
    itemLastMod = username;

    this.locationForm = this.formBuilder.group({
      name: [itemName, Validators.required],
      description: [itemDescription, Validators.required],
      imagePath: [itemImagePath, Validators.required],
      locations: itemLocations,
      lastMod: [itemLastMod]

    });


    ////////////////
    /*if (this.item.hasOwnProperty('locations')) {
      for (let j = 0; j < this.locations.length;j++){
        switch (this.locations[j].builing)
        {
          case 'A':
            this._marker.lat = 50.0268308;
            this._marker.lng = 21.9852123;
            break;
          default:
            break;
        }
        this._marker.label = (j+1).toString();
        this._marker.draggable = false;

        this.markers.push(this._marker)      
      } 
    }
  

      this.markers = [
      {
        lat: e,
        lng: 21.9852123,
        label: 'A',
        draggable: false
      },
    ];
    this._marker.lat = 50.0268308;
            

    console.log(this.markers[2].label);
  */
  
  }


}
