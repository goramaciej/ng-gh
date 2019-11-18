import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEquipmentItem } from './../../interfaces/IEquipmentItem';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

import { EquipmentItemModel } from './../models/equipment-item.model';
import * as UserEquipmentActions from '../actions/user-equipment.actions';

interface AppState {
  equipment: Array<EquipmentItemModel>;
}

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit {

  @Input()
  categoryName: string;

  equipment: Observable<EquipmentItemModel[]>;

  constructor(private store: Store<AppState>) {
    this.equipment = this.store.select('equipment');
  }
  ngOnInit() { }
  checkItemCategory(itemCategory: string) {
    switch (itemCategory) {
      case 'reward':
        if (this.categoryName === 'Nagrody') { return true; }
        break;
      case 'chest':
          if (this.categoryName === 'Skrzynie') { return true; }
          break;
      case 'run':
          if (this.categoryName === 'Runy') { return true; }
          break;
    }
  }
}
