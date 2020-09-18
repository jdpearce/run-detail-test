import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib0component2Component } from './lib8childlib0component2.component';

describe('Lib8childlib0component2Component', () => {
  let component: Lib8childlib0component2Component;
  let fixture: ComponentFixture<Lib8childlib0component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib0component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib0component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
