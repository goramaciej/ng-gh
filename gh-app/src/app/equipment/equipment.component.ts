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
    // ng serve
    data1: IEquipmentItem;
    categories: Array<string> = [];

    constructor() {

    }
    ngOnInit() {
      // tslint:disable-next-line: forin
      for (const n in User) {
        this.categories.push(n);
      }
      this.data1 = new Item();
    }

    getUserItemsOfCategory(categoryName: string): Array<string> {
      const userArr = User[categoryName];
      const itArr = Items[categoryName];
      const newArr = userArr.map( item => {
        const obj: IEquipmentItem = itArr.find(x => x.id === item);
        return obj;
      });
      return newArr;
    }

    openChest() {

    }
    addRandomReward() {

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
  constructor() {
    this.name = 'skrzynia1';
    this.id = 1;
    this.type = 'chest';
    this.imageUrl = '../../assets/images/thumbs/chest1.jpg';
    this.thumbUrl = '../../assets/images/thumbs/chest1.jpg';
    this.value = 100;
    this.key = '9H2;R-ZYB7D-MNB4A';
  }
}
