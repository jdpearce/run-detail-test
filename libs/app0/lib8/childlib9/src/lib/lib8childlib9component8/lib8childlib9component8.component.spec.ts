import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib9component8Component } from './lib8childlib9component8.component';

describe('Lib8childlib9component8Component', () => {
  let component: Lib8childlib9component8Component;
  let fixture: ComponentFixture<Lib8childlib9component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8childlib9component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib9component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
