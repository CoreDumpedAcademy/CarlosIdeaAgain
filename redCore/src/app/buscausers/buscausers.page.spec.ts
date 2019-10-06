import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscausersPage } from './buscausers.page';

describe('BuscausersPage', () => {
  let component: BuscausersPage;
  let fixture: ComponentFixture<BuscausersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscausersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscausersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
