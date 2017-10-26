import { Injectable } from '@angular/core';
import { Item } from './item';
import { Location } from './location';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class InventoryService {
  private items: Item[] =[
    new Item('Krzesło','Rok produkcji 2017, model XYZ. Kolor brązowy. ','/assets/images/items/krzeslo.jpg', [
      new Location(15,'A','305'),
      new Location(20,'B','112-B'),
      new Location(30,'B','105'), 
      new Location(40,'A','61')    
    ]),
    new Item('Biurko','Opis biurka. Model Y, kolor: biały. ','/assets/images/items/biurko.jpg', [
      new Location(14,'C','304'),
      new Location(76,'F','112')
    ])
  ];

  private locations: Location[]=[];

  result:any;//

  constructor(private _http: Http) { }//

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

//
  getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }

}
