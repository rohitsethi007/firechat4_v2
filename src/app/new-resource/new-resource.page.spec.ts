import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResourcePage } from './new-resource.page';

describe('NewResourcePage', () => {
  let component: NewResourcePage;
  let fixture: ComponentFixture<NewResourcePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewResourcePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
