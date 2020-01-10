import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollPage } from './poll.page';

describe('PollPage', () => {
  let component: PollPage;
  let fixture: ComponentFixture<PollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
