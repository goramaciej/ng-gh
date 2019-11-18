import { EquipmentItemModel } from './models/equipment-item.model';

export interface AppState {
  readonly equipment: Array<EquipmentItemModel>;
  // here every elements added
}
