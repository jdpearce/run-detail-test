import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6parentComponent } from './lib6parent.component';

describe('Lib6parentComponent', () => {
  let component: Lib6parentComponent;
  let fixture: ComponentFixture<Lib6parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib6parentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
