import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { EquipmentItemModel } from './../models/equipment-item.model';

import User from '../../data/user.json';

interface AppState {
  selectedItem: EquipmentItemModel;
}

@Component({
    selector: 'app-equipment',
    templateUrl: './equipment.component.html',
    styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

    categories: Array<string> = [];
    //enlargedComponent: IEquipmentItem;
    //clickedComponent: IEquipmentItem;

    selectedItem: Observable<EquipmentItemModel>;

    constructor(private store: Store<AppState>){
      this.selectedItem = this.store.select('selectedItem');
      this.selectedItem.subscribe(res => {
        // console.log('equipmentComponent show current selectedItem');
        // console.table(res);
      });
    }

    ngOnInit() {
      for (const n in User) {
        if (User.hasOwnProperty(n)) {
          this.categories.push(n);
        }
      }
    }

    /*getUserItemsOfCategory(categoryName: string): Array<string> {
      const userArr = User[categoryName];
      const itArr = Items[categoryName];
      const newArr = userArr.map( (item, index) => {
        const obj: IEquipmentItem = itArr.find(x => x.id === item);
        return obj;
      });
      return newArr;
    }

    itemEventOpen(event) {
      this.enlargedComponent = event;
    }

    openChest(event) {
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
    }*/
}
