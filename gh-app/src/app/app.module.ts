import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipItemComponent } from './equip-item/equip-item.component';
import { TemporaryComponent } from './temporary/temporary.component';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { EquipItemPlusComponent } from './equip-item-plus/equip-item-plus.component';
import { EquipItemEnlargedComponent } from './equip-item-enlarged/equip-item-enlarged.component';


@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,
    EquipItemComponent,
    TemporaryComponent,
    ItemsContainerComponent,
    EquipItemPlusComponent,
    EquipItemEnlargedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
