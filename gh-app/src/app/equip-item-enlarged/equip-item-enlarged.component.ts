import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEquipmentItem } from './../../interfaces/IEquipmentItem';

@Component({
  selector: 'app-equip-item-enlarged',
  templateUrl: './equip-item-enlarged.component.html',
  styleUrls: ['./equip-item-enlarged.component.scss']
})
export class EquipItemEnlargedComponent implements OnInit {

  @Input()
  item: IEquipmentItem = null;

  @Output()
  closeEvent = new EventEmitter<string>();

  @Output()
  closeEnlargedItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  logItem(){
    console.table(this.item);
  }
  closeEnlarged() {
    // this.closeEvent.emit('close');
    this.closeEnlargedItem.emit(12);
  }

}
