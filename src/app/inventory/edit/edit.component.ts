import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ReactiveFormsModule 
} from "@angular/forms";
import { Http, Headers, RequestOptions } from '@angular/http';


import { InventoryService } from '../inventory.service';
import { Item } from '../item';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit, OnDestroy {
    itemForm: FormGroup;
    private subscription: Subscription;
    private itemIndex: number;
    private item: Item;
    items: Item[];
    private isNew = true;
    private linkurl: string;
    private imgurl: string;
    filesToUpload: Array<File> = [];
    imagePom: any;
    private isImgSelected = false;

    constructor(private is: InventoryService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private _http: Http) {  //
    
    }

    ngOnInit() {
      this.subscription = this.route.params.subscribe(
        (params: any) => {
          if (params.hasOwnProperty('id')) {
            this.isNew = false;
            this.itemIndex = params['id'];
            this.item = this.is.getItem(this.itemIndex);
          } else {this.isNew = true;this.item=null}
          this.initForm();
        }
      );
    }

    onSubmit() {
      var pom = this.itemForm.controls['name'].value.charAt(0).toUpperCase();;
        for (var j=1; j<this.itemForm.controls['name'].value.length; j++)
          pom += this.itemForm.controls['name'].value.charAt(j)
      this.itemForm.controls['name'].setValue(pom);

      if (this.itemForm.controls['imagePath'].value == (null || ''))
          this.itemForm.controls['imagePath'].setValue("/assets/images/items/none.png");

      const [username, password] = sessionStorage.getItem('currentUser').split('|');
      this.itemForm.controls['lastMod'].setValue(username);
      
      if(this.isImgSelected){
        this.upload();
        //if (!this.isNew) this.linkurl = 'inwentarz/' +this.itemIndex; else this.linkurl = 'inwentarz';
        this.itemForm.controls['imagePath'].setValue("/assets/images/items/" + this.imgurl);
        //window.location.href='#';
      }

      const newItem = this.itemForm.value;
      if (this.isNew) {
        this.is.addItem(newItem);
      } else {
        this.is.editItem(this.item, newItem);
      }

      this.is.postItemsAPI().subscribe(
        data => console.log(data),
        error => console.error(error)
      );
      
      this.is.getItems();
      this.navigateBack();

  
      
    }

    private navigateBack() {
      if (!this.isNew) this.linkurl = 'inwentarz/' +this.itemIndex; else this.linkurl = 'inwentarz';
      this.router.navigate([this.linkurl]);

    }


    onCancel() {
      this.navigateBack();
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    onAddLocation(quantity: number, building: string, room: string) {
      (<FormArray>this.itemForm.controls['locations']).push(
        new FormGroup({
          quantity: new FormControl(quantity, [Validators.required, Validators.min(1), Validators.max(1000)]),
          building: new FormControl(building.toUpperCase(), Validators.required),
          room: new FormControl(room.toUpperCase(), Validators.required),
        })
      );
      
    }

    onRemoveLocation(index: number) {
      (<FormArray>this.itemForm.controls['locations']).removeAt(index);
    }


    upload() {
      const formData: any = new FormData();
      const files: Array<File> = this.filesToUpload;

      this.imgurl = Date.now() + files[0]['name'];

      formData.append("uploads[]", files[0], this.imgurl);
      console.log(this.imgurl);

      this._http.post('/api/upload', formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files));
      //
      }

      fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        this.imagePom = fileInput.target.files[0]['name'];
        this.isImgSelected = true;
    }

  private initForm(){
    let itemName = '';
    let itemDescription = '';
    let itemImagePath = '';
    let itemLastMod='';
    let itemLocations: FormArray = new FormArray([]);
    
    if (!this.isNew) {
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
      itemLastMod = this.item.lastMod;
      this.imgurl =  this.item.imagePath;

    }

    this.itemForm = this.formBuilder.group({
      name: [itemName, Validators.required],
      description: [itemDescription, Validators.required],
      imagePath: [itemImagePath],
      locations: itemLocations,
      lastMod: [itemLastMod]
    });
  }

}
     
