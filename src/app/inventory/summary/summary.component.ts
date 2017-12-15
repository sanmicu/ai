import { Component, OnInit } from '@angular/core';
import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';

import { InventoryService } from '../inventory.service';
import { Item } from '../item';
import { Summary } from './summary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {
  items: Item[];
  summary: Summary[]=[];
  itemInSummary: Summary;
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
                  this.itemInSummary =  {
                      name: this.items[i].name,
                      quantity: Number(this.items[i].locations[j].quantity)
                  }
                    this.summary.push(this.itemInSummary);
                  }
            }
     }
     
     for(var i=0; i<this.summary.length-1; i++){
        if(this.summary[i].name==this.summary[i+1].name)
        {
          this.summary[i+1].quantity += this.summary[i].quantity;
        }
     }

      var obj = {};
      for ( var i=0, len=this.summary.length; i < len; i++ )
      {
        obj[this.summary[i]['name']] = this.summary[i];
      }

      var pom_array = new Array();
      for ( var key in obj )
      {
        pom_array.push(obj[key]);
      }

      this.summary = pom_array;
      this.pie_ChartData = [['Nazwa', 'Ilość']];

      this.pie_ChartOptions = {
      title: 'Zestawienie dla budynku ' + b,
      width: 800,
      height: 460
      };
      for(var i=0; i<this.summary.length; i++){
        var singleItem = [this.summary[i].name, this.summary[i].quantity];
        this.pie_ChartData.push(singleItem);
      }
      
      this.summary = [];
  }

}
