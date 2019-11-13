import { Component, OnInit, Input } from '@angular/core';
import { IEquipmentItem } from './../../interfaces/IEquipmentItem';

import Items from '../../data/items.json';
import User from '../../data/user.json';

@Component({
    selector: 'app-equipment',
    templateUrl: './equipment.component.html',
    styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
    //ng serve
    data1: IEquipmentItem;
    user = User;
    items = Items;

    constructor() {

    }
    ngOnInit() {
      console.log('Reading local json files:: ');



      //console.log(JSON.parse(this.user));
      //console.log(JSON.parse(User));
      this.data1 = new Item();
    }
    showData(){
      console.log(this.data1.name);
    }
    itemSelected(event) {
      console.log('itemSelected: ' + event);
    }

}

class Item implements IEquipmentItem {
  name: string;
  id: number;
  type: string;
  imageUrl: string;
  thumbUrl: string;
  value: number;
  key: string;
  constructor(){
    this.name = 'skrzynia1';
    this.id = 1;
    this.type = 'chest';
    this.imageUrl = '../../assets/images/thumbs/chest1.jpg';
    this.thumbUrl = '../../assets/images/thumbs/chest1.jpg';
    this.value = 100;
    this.key = '9H2;R-ZYB7D-MNB4A';
  }
}
