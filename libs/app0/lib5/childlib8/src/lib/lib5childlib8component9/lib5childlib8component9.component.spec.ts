import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib8component9Component } from './lib5childlib8component9.component';

describe('Lib5childlib8component9Component', () => {
  let component: Lib5childlib8component9Component;
  let fixture: ComponentFixture<Lib5childlib8component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib8component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib8component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
