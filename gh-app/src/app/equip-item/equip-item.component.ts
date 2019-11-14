import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IEquipmentItem } from './../../interfaces/IEquipmentItem';

@Component({
  selector: 'app-equip-item',
  templateUrl: './equip-item.component.html',
  styleUrls: ['./equip-item.component.scss']
})
export class EquipItemComponent implements OnInit {

  @Input()
  item: IEquipmentItem;

  @Input()
  appIndex: number;

  @Output()
  itemEvent = new EventEmitter<IEquipmentItem>();

  constructor() { }

  ngOnInit() {

  }
  emitItem(event) {
    this.item.appIndex = this.appIndex;
    this.itemEvent.emit(this.item);
  }
}
