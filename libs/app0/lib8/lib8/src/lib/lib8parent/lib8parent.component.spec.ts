import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8parentComponent } from './lib8parent.component';

describe('Lib8parentComponent', () => {
  let component: Lib8parentComponent;
  let fixture: ComponentFixture<Lib8parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib8parentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
