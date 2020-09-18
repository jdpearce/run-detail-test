import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib4component2Component } from './lib8childlib4component2.component';

describe('Lib8childlib4component2Component', () => {
  let component: Lib8childlib4component2Component;
  let fixture: ComponentFixture<Lib8childlib4component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib4component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib4component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
