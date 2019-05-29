import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaminacionDelSueloesPage } from './contaminacion-del-sueloes.page';

describe('ContaminacionDelSueloesPage', () => {
  let component: ContaminacionDelSueloesPage;
  let fixture: ComponentFixture<ContaminacionDelSueloesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaminacionDelSueloesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaminacionDelSueloesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
