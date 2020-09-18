import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib0component8Component } from './lib8childlib0component8.component';

describe('Lib8childlib0component8Component', () => {
  let component: Lib8childlib0component8Component;
  let fixture: ComponentFixture<Lib8childlib0component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib0component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib0component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
