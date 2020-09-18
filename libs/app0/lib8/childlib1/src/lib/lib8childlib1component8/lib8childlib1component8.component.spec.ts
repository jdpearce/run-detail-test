import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib1component8Component } from './lib8childlib1component8.component';

describe('Lib8childlib1component8Component', () => {
  let component: Lib8childlib1component8Component;
  let fixture: ComponentFixture<Lib8childlib1component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib1component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib1component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
