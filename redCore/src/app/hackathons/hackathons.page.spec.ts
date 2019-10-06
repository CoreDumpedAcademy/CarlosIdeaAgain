import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonsPage } from './hackathons.page';

describe('HackathonsPage', () => {
  let component: HackathonsPage;
  let fixture: ComponentFixture<HackathonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
