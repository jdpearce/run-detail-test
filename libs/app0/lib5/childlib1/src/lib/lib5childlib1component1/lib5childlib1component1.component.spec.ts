import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib1component1Component } from './lib5childlib1component1.component';

describe('Lib5childlib1component1Component', () => {
  let component: Lib5childlib1component1Component;
  let fixture: ComponentFixture<Lib5childlib1component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib1component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
