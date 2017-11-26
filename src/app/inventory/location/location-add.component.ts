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


import { Location } from "../location";
import { LocationService } from "./location.service";
import { Item } from '../item';
import { InventoryService } from '../inventory.service';


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
    let itemName = '';
    let itemDescription = '';
    let itemImagePath = '';
    let itemLastMod='';
    let itemLocations: FormArray = new FormArray([]);
    
    if (this.item.hasOwnProperty('locations')) {
      for (let i = 0; i < this.item.locations.length; i++) {
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
  
  }


}
