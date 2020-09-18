import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib3component8Component } from './lib8childlib3component8.component';

describe('Lib8childlib3component8Component', () => {
  let component: Lib8childlib3component8Component;
  let fixture: ComponentFixture<Lib8childlib3component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib3component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib3component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
