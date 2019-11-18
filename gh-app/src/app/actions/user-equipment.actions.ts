import { Action } from '@ngrx/store';
import { EquipmentItemModel } from './../models/equipment-item.model';


export const ADD_ITEM = '[EQUIPMENT] AddItem';
export const REMOVE_ITEM = '[EQUIPMENT] RemoveItem';
export const ADD_ITEM_AND_OPEN = '[EQUIPMENT] AddItemAndOpen';


export class AddItemAction implements Action {
  readonly type = ADD_ITEM;
  constructor( public payload: EquipmentItemModel ) { }
}

export class RemoveItemAction implements Action {
  readonly type = REMOVE_ITEM;
  constructor( public payload: number ) {
    //console.log('Numer do usunięcia: ' + payload);
  }
}

export class AddItemAndOpenAction implements Action{
  readonly type = ADD_ITEM_AND_OPEN;
  constructor( public payload: EquipmentItemModel ) {
    console.log('Numer do usunięcia: ' + payload);
  }
}

export type Actions
  = AddItemAction
  | RemoveItemAction
  | AddItemAndOpenAction
