import { Action } from '@ngrx/store';
import * as UserEquipmentActions from '../actions/user-equipment.actions';
import { EquipmentItemModel } from './../models/equipment-item.model';

export function UserItemsReducer( state: Array<EquipmentItemModel> = [], action: UserEquipmentActions.Actions)  {
  switch (action.type) {
    case UserEquipmentActions.ADD_ITEM:
      return [...state, action.payload];
    case UserEquipmentActions.REMOVE_ITEM:
      console.log('TERAZ REMOVE');
      break;
    default:
      return state;
  }
}
