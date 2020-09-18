import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib3component2Component } from './lib8childlib3component2.component';

describe('Lib8childlib3component2Component', () => {
  let component: Lib8childlib3component2Component;
  let fixture: ComponentFixture<Lib8childlib3component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib3component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib3component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
