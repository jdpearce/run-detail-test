import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7parentComponent } from './lib7parent.component';

describe('Lib7parentComponent', () => {
  let component: Lib7parentComponent;
  let fixture: ComponentFixture<Lib7parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib7parentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
