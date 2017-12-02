import { Component, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {   FormGroup,
  AbstractControl,
  FormControl,
  Validators,
  FormBuilder,
  FormArray 
}  from "@angular/forms";

import { Item } from '../item';
import { InventoryService } from '../inventory.service';
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html'
})
export class InventoryListComponent implements OnInit{
   items: Item[];
   searchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private iS: InventoryService) { 
     this.items = this.iS.getItems();

     //this.iS.postItemsAPI().subscribe(
    //  data => console.log(data),
    //  error => console.error(error)
    //);

     this.items = this.iS.getItems();
     //console.log('push');
  }

  ngOnInit(){
    this.searchForm = this.fb.group({
        name: ['']
    });
  }

   onSearch(){
      var pom = this.searchForm.controls['name'].value;
      for (var i=0; i<this.items.length; i++)
          if (this.items[i].name.toLowerCase().includes(pom.toLowerCase()))
          {
             var linkurl = 'inwentarz/' + i;
             this.router.navigate([linkurl]);
          }

   }

}

