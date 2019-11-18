import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EquipmentItemModel } from './../models/equipment-item.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as UserEquipmentActions from '../actions/user-equipment.actions';

import * as SelectedItemActions from './../actions/selected-item.actions';

import Items from '../../data/items.json';
import User from '../../data/user.json';

interface AppState {
  selectedItem: EquipmentItemModel;
  equipment: Array<EquipmentItemModel>;
}

@Component({
  selector: 'app-equip-item-enlarged',
  templateUrl: './equip-item-enlarged.component.html',
  styleUrls: ['./equip-item-enlarged.component.scss']
})
export class EquipItemEnlargedComponent implements OnInit {
  selectedItem: Observable<EquipmentItemModel>;
  equipment: Observable<EquipmentItemModel[]>;

  @Input()
  item: EquipmentItemModel = null;

  @Output()
  closeEnlargedItemEvent = new EventEmitter<number>();

  @Output()
  openChestEvent = new EventEmitter<number>();

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() { }

  openChest() {
    const newReward = JSON.parse(JSON.stringify(Items.Nagrody[Math.floor(Math.random() * Items.Nagrody.length)]));
    newReward.appId = Math.floor(Math.random() * 100000);
    this.store.dispatch( new UserEquipmentActions.AddItemAndOpenAction(newReward) );
    this.store.dispatch( new SelectedItemActions.SetSelectedItemAction(newReward) );
  }
  closeEnlarged() {
    this.store.dispatch( new SelectedItemActions.ClearSelectedItemAction() );
  }
}
