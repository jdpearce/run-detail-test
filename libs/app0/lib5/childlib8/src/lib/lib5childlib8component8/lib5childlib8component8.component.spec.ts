import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib8component8Component } from './lib5childlib8component8.component';

describe('Lib5childlib8component8Component', () => {
  let component: Lib5childlib8component8Component;
  let fixture: ComponentFixture<Lib5childlib8component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib8component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib8component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
