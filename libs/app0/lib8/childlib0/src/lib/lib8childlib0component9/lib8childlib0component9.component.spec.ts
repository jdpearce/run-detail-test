import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib0component9Component } from './lib8childlib0component9.component';

describe('Lib8childlib0component9Component', () => {
  let component: Lib8childlib0component9Component;
  let fixture: ComponentFixture<Lib8childlib0component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib0component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib0component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
