import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaminacionDelAguasPage } from './contaminacion-del-aguas.page';

describe('ContaminacionDelAguasPage', () => {
  let component: ContaminacionDelAguasPage;
  let fixture: ComponentFixture<ContaminacionDelAguasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaminacionDelAguasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaminacionDelAguasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
