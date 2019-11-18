import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//import { IEquipmentItem } from './../../interfaces/IEquipmentItem';
import { EquipmentItemModel } from './../models/equipment-item.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as SelectedItemActions from './../actions/selected-item.actions';
interface AppState {
  selectedItem: EquipmentItemModel;
}

@Component({
  selector: 'app-equip-item',
  templateUrl: './equip-item.component.html',
  styleUrls: ['./equip-item.component.scss']
})
export class EquipItemComponent implements OnInit {

  @Input()
  item: EquipmentItemModel;

  @Input()
  appIndex: number;
  selectedItem: Observable<EquipmentItemModel>;

  /*@Output()
  itemEvent = new EventEmitter<IEquipmentItem>();*/

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {

  }
  setSelected(ev){
    if(this.item.type != 'run'){
      this.store.dispatch( new SelectedItemActions.SetSelectedItemAction(this.item) );
    }
    /*if(!this.item.type != 'run'){
      console.log('jest inny niż run');
    }*/
  }
  // emitItem(event) {
  //   this.item.appIndex = this.appIndex;
  //   this.itemEvent.emit(this.item);
  // }
}
