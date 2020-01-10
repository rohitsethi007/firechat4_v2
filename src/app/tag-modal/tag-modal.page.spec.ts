import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagModalPage } from './tag-modal.page';

describe('TagModalPage', () => {
  let component: TagModalPage;
  let fixture: ComponentFixture<TagModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
