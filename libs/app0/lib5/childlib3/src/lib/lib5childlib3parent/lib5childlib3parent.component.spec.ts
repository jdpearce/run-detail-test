import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib3parentComponent } from './lib5childlib3parent.component';

describe('Lib5childlib3parentComponent', () => {
  let component: Lib5childlib3parentComponent;
  let fixture: ComponentFixture<Lib5childlib3parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib3parentComponent], schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
