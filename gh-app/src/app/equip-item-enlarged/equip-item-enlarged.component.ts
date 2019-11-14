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

  // @Output()
  // closeEvent = new EventEmitter<string>();

  @Output()
  closeEnlargedItemEvent = new EventEmitter<number>();

  @Output()
  openChestEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  openChest() {
    this.openChestEvent.emit(this.item.appIndex);
  }
  closeEnlarged() {
    this.closeEnlargedItemEvent.emit();
  }

}
