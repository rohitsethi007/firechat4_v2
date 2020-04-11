import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionListModalPage } from './reaction-list-modal.page';

describe('ReactionListModalPage', () => {
  let component: ReactionListModalPage;
  let fixture: ComponentFixture<ReactionListModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionListModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionListModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
