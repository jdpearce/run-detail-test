import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib0component6Component } from './lib8childlib0component6.component';

describe('Lib8childlib0component6Component', () => {
  let component: Lib8childlib0component6Component;
  let fixture: ComponentFixture<Lib8childlib0component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib0component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib0component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
