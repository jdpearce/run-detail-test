import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8parentComponent } from './lib2childlib8parent.component';

describe('Lib2childlib8parentComponent', () => {
  let component: Lib2childlib8parentComponent;
  let fixture: ComponentFixture<Lib2childlib8parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2childlib8parentComponent], schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
