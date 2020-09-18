import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2parentComponent } from './lib2parent.component';

describe('Lib2parentComponent', () => {
  let component: Lib2parentComponent;
  let fixture: ComponentFixture<Lib2parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2parentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
