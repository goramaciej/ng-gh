export interface EquipmentItemModel {
  name: string;
  appId: number;
  id: number;
  type: string;
  //chest, run, reward
  imageUrl: string;
  thumbUrl?: string;
  value: number;
  key?: string;
}
