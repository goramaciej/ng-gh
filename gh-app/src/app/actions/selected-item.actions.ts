import { Action } from '@ngrx/store';
import { EquipmentItemModel } from './../models/equipment-item.model';
import { clearItem } from './../models/clear-item';

export const SET_SELECTED_ITEM = '[SelectedItem] Set';
export const CLEAR_SELECTED_ITEM = '[SelectedItem] Clear';

export class SetSelectedItemAction implements Action {
  readonly type = SET_SELECTED_ITEM;
  constructor( public payload: EquipmentItemModel = clearItem ) { }
}

export class ClearSelectedItemAction implements Action {
  readonly type = CLEAR_SELECTED_ITEM;

  constructor( public payload: EquipmentItemModel = clearItem ) {

  }
}

export type Actions = SetSelectedItemAction | ClearSelectedItemAction;
