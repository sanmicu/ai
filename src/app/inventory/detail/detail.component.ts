import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  @Input() selectedItem: Item;

  constructor() { }

  ngOnInit() {
  }

}
