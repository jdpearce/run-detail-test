import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9parentComponent } from './lib9parent.component';

describe('Lib9parentComponent', () => {
  let component: Lib9parentComponent;
  let fixture: ComponentFixture<Lib9parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib9parentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
