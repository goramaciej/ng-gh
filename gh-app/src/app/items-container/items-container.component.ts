import { Component, OnInit, Input, Output } from '@angular/core';
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

  value: number = 0;

  ngOnInit() {
    for(const i of this.items){
      this.value += i.value;
    }
  }
  logMeOut(){
    console.log(this.value);
  }
}
