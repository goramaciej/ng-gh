import { EquipmentItemModel } from './equipment-item.model';

export class ClearItem implements EquipmentItemModel{
  name = '';
  id = 0;
  type = '';
  imageUrl = '';
  thumbUrl = '';
  value = 0;
  key = '';
  appId?: 0;
}
