import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib9component8Component } from './lib5childlib9component8.component';

describe('Lib5childlib9component8Component', () => {
  let component: Lib5childlib9component8Component;
  let fixture: ComponentFixture<Lib5childlib9component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib9component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib9component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
