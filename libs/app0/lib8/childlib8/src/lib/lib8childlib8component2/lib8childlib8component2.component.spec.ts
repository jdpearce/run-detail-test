import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib8component2Component } from './lib8childlib8component2.component';

describe('Lib8childlib8component2Component', () => {
  let component: Lib8childlib8component2Component;
  let fixture: ComponentFixture<Lib8childlib8component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib8component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib8component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
