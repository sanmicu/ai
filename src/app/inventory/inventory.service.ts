import { Injectable } from '@angular/core';
import { Item } from './item';
import { Location } from './location';
import { ObjectMapper } from 'json-object-mapper';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class InventoryService {
  private items: Item[];
  private send_items;
  result:any;

  constructor(private _http: Http) {
     this.getItemsAPI()                       
      .subscribe(res => this.items = res); 
  }

  getItems() {
    return this.items;
  }

  getItem(id: number){
    return this.items[id];
  }
  deleteItem(item: Item){
    this.items.splice(this.items.indexOf(item), 1);
  }

  addItem(item: Item){
    this.items.push(item);
  }

  editItem(oldItem: Item, newItem: Item){
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

 //Funkcje związanie z API
  getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }

  getItemsAPI() {
    return this._http.get("/api/items")
      .map(result => result.json().data);
    
  }
  postItemsAPI() {
     this.send_items = JSON.stringify(this.items);
     this._http.post('/api/items',this.send_items).map(result => result.json().data);
  }

}
