import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib9component8Component } from './lib0childlib9component8.component';

describe('Lib0childlib9component8Component', () => {
  let component: Lib0childlib9component8Component;
  let fixture: ComponentFixture<Lib0childlib9component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib0childlib9component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib9component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
