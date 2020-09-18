import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib5component8Component } from './lib8childlib5component8.component';

describe('Lib8childlib5component8Component', () => {
  let component: Lib8childlib5component8Component;
  let fixture: ComponentFixture<Lib8childlib5component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib5component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib5component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
