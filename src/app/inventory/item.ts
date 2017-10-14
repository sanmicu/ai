import { Location } from "./location";

export class Item {
    constructor(public name:string, public description:string, public imagePath:string, public locations: Location[]) {}
}
