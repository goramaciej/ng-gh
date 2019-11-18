import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EquipmentItemModel } from './../models/equipment-item.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as SelectedItemActions from './../actions/selected-item.actions';
interface AppState {
  selectedItem: EquipmentItemModel;
}

@Component({
  selector: 'app-equip-item-enlarged',
  templateUrl: './equip-item-enlarged.component.html',
  styleUrls: ['./equip-item-enlarged.component.scss']
})
export class EquipItemEnlargedComponent implements OnInit {

  @Input()
  item: EquipmentItemModel = null;

  // @Output()
  // closeEvent = new EventEmitter<string>();

  @Output()
  closeEnlargedItemEvent = new EventEmitter<number>();

  @Output()
  openChestEvent = new EventEmitter<number>();

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() { }

  openChest() {
    console.log('openChest');
  }
  closeEnlarged() {
    //this.closeEnlargedItemEvent.emit();
    this.store.dispatch( new SelectedItemActions.ClearSelectedItemAction() );
  }
  //


}
