import { Injectable } from '@angular/core';
import { Item } from './item';
import { Location } from './location';

@Injectable()
export class InventoryService {
  private items: Item[] =[
    new Item('Krzesło','Rok produkcji 2017, model XYZ. Kolor brązowy. ','/assets/images/items/krzeslo.jpg', [
      new Location(15,'A','305'),
      new Location(20,'B','112-B')
    ]),
    new Item('Biurko','Opis biurka. Model Y, kolor: biały. ','/assets/images/items/biurko.jpg', [
      new Location(30,'B','105'),
      new Location(40,'A','61'),
      new Location(1,'C','304')
    ])

  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  getItem(id: number){
    return this.items[id];
  }
  deleteItem(item: Item){
    this.items.splice(this.items.indexOf(item), 1);
  }

}
