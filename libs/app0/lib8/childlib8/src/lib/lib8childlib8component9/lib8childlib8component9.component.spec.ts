import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib8component9Component } from './lib8childlib8component9.component';

describe('Lib8childlib8component9Component', () => {
  let component: Lib8childlib8component9Component;
  let fixture: ComponentFixture<Lib8childlib8component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib8component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib8component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
