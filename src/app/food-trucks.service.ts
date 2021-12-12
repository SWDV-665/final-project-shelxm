import { Injectable } from '@angular/core';
import data from "./food_trucks.json"

@Injectable({
  providedIn: 'root'
})
export class FoodTrucksService {
  constructor() { }

  getTrucks() {
    return data.trucks;
  }
}
