import { Component, OnInit } from '@angular/core';
import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';

import { InventoryService } from '../inventory.service';
import { Item } from '../item';
import { Summary } from './summary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {
  items: Item[];
  pom_array: Summary[]=[];
  _pom_array: Summary;
  public pie_ChartData;
  public pie_ChartOptions;
  public selected: boolean = false;

  constructor(private iS: InventoryService) {
     this.items = this.iS.getItems();
  }

  ngOnInit(){}

  showSummary(b: string) {
    this.selected = true;
     for (var i=0; i<this.items.length; i++)
     {
         for (var j=0; j<this.items[i].locations.length; j++)
            {
              if (this.items[i].locations[j].building == b)
                  {                 
                  this._pom_array =  {
                      name: this.items[i].name,
                      quantity: Number(this.items[i].locations[j].quantity)
                  }
                    this.pom_array.push(this._pom_array);
                  }
            }
     }
     
     for(var i=0; i<this.pom_array.length-1; i++){
        if(this.pom_array[i].name==this.pom_array[i+1].name)
        {
          this.pom_array[i+1].quantity += this.pom_array[i].quantity;
        }
     }


      var obj = {};
      for ( var i=0, len=this.pom_array.length; i < len; i++ )
      {
        obj[this.pom_array[i]['name']] = this.pom_array[i];
      }

      var pom_array1 = new Array();
      for ( var key in obj )
      {
        pom_array1.push(obj[key]);
      }

      this.pom_array = pom_array1;
      this.pie_ChartData = [['Nazwa', 'Ilość']];

      this.pie_ChartOptions = {
      title: 'Zestawienie dla budynku ' + b,
      width: 800,
      height: 400
      };
      for(var i=0; i<this.pom_array.length; i++){
        var singleItem = [this.pom_array[i].name, this.pom_array[i].quantity];
        //console.log(singleItem);
        this.pie_ChartData.push(singleItem);
      }
      
      //console.log(this.pom_array);
      this.pom_array = [];
  }

}
