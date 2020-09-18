import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3parentComponent } from './lib0childlib3parent.component';

describe('Lib0childlib3parentComponent', () => {
  let component: Lib0childlib3parentComponent;
  let fixture: ComponentFixture<Lib0childlib3parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib0childlib3parentComponent], schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
