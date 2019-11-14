import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipItemPlusComponent } from './equip-item-plus.component';

describe('EquipItemPlusComponent', () => {
  let component: EquipItemPlusComponent;
  let fixture: ComponentFixture<EquipItemPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipItemPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipItemPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
