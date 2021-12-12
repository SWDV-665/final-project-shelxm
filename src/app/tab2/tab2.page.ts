import { Component, OnInit } from '@angular/core';
import { FoodTrucksService } from '../food-trucks.service';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  trucks: any=[]
  title='Food Trucks';
  constructor(public dataService: FoodTrucksService) {}
  
  ngOnInit() {
    this.trucks=this.dataService.getTrucks();
  }

  async basicShare(trucks) {
    await Share.share({
      title: 'Sharing ' + trucks.name,
      text: 'Check out this food truck',
      url: trucks.facebookLink,
      dialogTitle: 'Share with buddies',
    });
  }
  
}
