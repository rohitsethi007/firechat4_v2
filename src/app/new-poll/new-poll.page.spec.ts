import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPollPage } from './new-poll.page';

describe('NewPollPage', () => {
  let component: NewPollPage;
  let fixture: ComponentFixture<NewPollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
