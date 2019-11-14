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
    enlargedComponent: IEquipmentItem;
    categories: Array<string> = [];

    constructor() {

    }
    ngOnInit() {
      for (const n in User) {
        if (User.hasOwnProperty(n)) {
          this.categories.push(n);
        }
      }
    }

    getUserItemsOfCategory(categoryName: string): Array<string> {
      const userArr = User[categoryName];
      const itArr = Items[categoryName];
      const newArr = userArr.map( (item, index) => {
        const obj: IEquipmentItem = itArr.find(x => x.id === item);
        return obj;
      });
      return newArr;
    }

    itemEventOpen(event){
      this.enlargedComponent = event;
    }

    openChest(event){
      User.Skrzynie.splice(event, 1);
      this.addRandomReward();
    }

    closeEnlargedItem(event) {
      this.enlargedComponent = null;
    }
    addRandomReward() {
      const newReward = Items.Nagrody[Math.floor(Math.random() * Items.Nagrody.length)];
      User.Nagrody.unshift(newReward.id);
      this.enlargedComponent = newReward;
    }
}
