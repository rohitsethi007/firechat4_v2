import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSearchPage } from './group-search.page';

describe('GroupSearchPage', () => {
  let component: GroupSearchPage;
  let fixture: ComponentFixture<GroupSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
