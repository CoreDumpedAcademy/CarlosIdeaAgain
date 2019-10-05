import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialesPage } from './tutoriales.page';

describe('TutorialesPage', () => {
  let component: TutorialesPage;
  let fixture: ComponentFixture<TutorialesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
