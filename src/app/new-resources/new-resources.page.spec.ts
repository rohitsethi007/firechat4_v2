import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResourcesPage } from './new-resources.page';

describe('NewResourcesPage', () => {
  let component: NewResourcesPage;
  let fixture: ComponentFixture<NewResourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewResourcesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
