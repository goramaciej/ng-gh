import { Action } from '@ngrx/store';
import * as SelectedItemActions from '../actions/selected-item.actions';
import { EquipmentItemModel } from './../models/equipment-item.model';

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
}

export function SelectedItemReducer( state: EquipmentItemModel, action: SelectedItemActions.Actions)  {
  switch (action.type) {
    case SelectedItemActions.SET_SELECTED_ITEM:
      return newState(state, action.payload);
    case SelectedItemActions.CLEAR_SELECTED_ITEM:
      return newState(state, action.payload);
    default:
      return state;
  }
}
