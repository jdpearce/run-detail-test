import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib0component9Component } from './lib7childlib0component9.component';

describe('Lib7childlib0component9Component', () => {
  let component: Lib7childlib0component9Component;
  let fixture: ComponentFixture<Lib7childlib0component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib0component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib0component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
