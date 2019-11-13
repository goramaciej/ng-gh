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
  id: number;

  @Output()
  selected = new EventEmitter<IEquipmentItem>();

  constructor() { }

  ngOnInit() {

  }
  emitItem(event){
    console.log('moje id: ' + this.id);
    this.selected.emit(this.item);
  }
}
