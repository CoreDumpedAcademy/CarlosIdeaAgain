import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalleresPage } from './talleres.page';

describe('TalleresPage', () => {
  let component: TalleresPage;
  let fixture: ComponentFixture<TalleresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalleresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalleresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
