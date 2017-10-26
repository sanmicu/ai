import { Location } from '../location';

export class LocationService {
  private locations: Location[] = [];


  constructor() { }

  getLocations() {
      return this.locations;
  }


  /*addLocations(locations: Location[]){
    Array.prototype.push.apply(this.locations, locations);
  }*/

  addLocation(location: Location){
    this.locations.push(location);
  }

  deleteLocation(location: Location){
    this.locations.splice(this.locations.indexOf(location), 1);
    
  }

}


//Umiejscowienie danego przedmiotu. Jeden rodzaj przedmiotu może się oczywiście znajdować w wielu salach.