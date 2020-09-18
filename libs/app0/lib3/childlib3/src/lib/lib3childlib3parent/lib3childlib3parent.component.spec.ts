import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3parentComponent } from './lib3childlib3parent.component';

describe('Lib3childlib3parentComponent', () => {
  let component: Lib3childlib3parentComponent;
  let fixture: ComponentFixture<Lib3childlib3parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3childlib3parentComponent], schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
