export interface IEquipmentItem {
    name: string;
    id: number;
    type: string; //chest, run, reward
    imageUrl: string;
    thumbUrl?: string;
    value: number;
    key?: string;
    appIndex?: number;
}
