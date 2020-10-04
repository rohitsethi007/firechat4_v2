import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSearchPage } from './feed-search.page';

describe('FeedSearchPage', () => {
  let component: FeedSearchPage;
  let fixture: ComponentFixture<FeedSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
