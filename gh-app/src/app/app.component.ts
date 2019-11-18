import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { EquipmentItemModel } from './models/equipment-item.model';
//import { UserEquipmentModel } from './models/user-equipment.model';
import * as UserEquipmentActions from './actions/user-equipment.actions';

import Items from '../data/items.json';
import User from '../data/user.json';

interface AppState {
  equipment: Array<EquipmentItemModel>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gh-app';

  equipment: Observable<EquipmentItemModel[]>;

  constructor(private store: Store<AppState>) {
    for (let category in User){
      if (User.hasOwnProperty(category)) {
        const catName = category;
        for (let item of User[catName]) {
          const it: EquipmentItemModel = Items[catName].find( el => el.id === item);
          const copy = JSON.parse(JSON.stringify(it));
          copy.appId = Math.floor(Math.random() * 100000);
          this.store.dispatch( new UserEquipmentActions.AddItemAction(copy) );
          // switch (it.type){
          //   case 'chest':
          //       this.store.dispatch( new UserEquipmentActions.AddItemAction(it) );
          //       break;
          //   case 'run':
          //       this.store.dispatch( new UserEquipmentActions.AddRunAction(it) );
          //       break;
          //   case 'reward':
          //       this.store.dispatch( new UserEquipmentActions.AddRewardAction(it) );
          //       break;
          // }
        }
      }
    }
  }
}
