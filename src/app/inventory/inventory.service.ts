import { Injectable, OnInit } from '@angular/core';
import { Item } from './item';
import { Location } from './location';
import { ObjectMapper } from 'json-object-mapper';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class InventoryService implements OnInit {
  private items: Item[];
  result:any;

  constructor(private _http: Http) {
      this.getItemsAPI()                       
      .subscribe(res => this.items = res); 

      
  }

  ngOnInit(){
    this.postItemsAPI().subscribe(
        data => console.log(data),
        error => console.error(error)
    );
  }

  getItems() {
      return this.items;
  }

  getItem(id: number){
    return this.items[id];
  }
  deleteItem(item: Item){
    this.items.splice(this.items.indexOf(item), 1);
     return this.items;
  }

  addItem(item: Item){
    this.items.push(item);
  }

  editItem(oldItem: Item, newItem: Item){
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

 //Funkcje związanie z API
  getItemsAPI() {
    return this._http.get("/api/items")
      .map(result => result.json().data);
    
  }

  postItemsAPI() {
    const body = JSON.stringify(this.items);  
    const headers = new Headers({
    'Content-Type': 'application/json'
    }); 
    return this._http.post('/api/items', body, {headers: headers});

  }


}
