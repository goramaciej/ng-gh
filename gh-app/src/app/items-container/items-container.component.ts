import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEquipmentItem } from './../../interfaces/IEquipmentItem';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit {

  @Input()
  categoryName: string;

  @Input()
  items: Array<IEquipmentItem>;

  @Output()
  itemEvent = new EventEmitter<IEquipmentItem>();

  value: number = 0;

  ngOnInit() {
    for(const i of this.items) {
      this.value += i.value;
    }
  }
  itemEventOpen(event) {
    this.itemEvent.emit(event);
  }
}
