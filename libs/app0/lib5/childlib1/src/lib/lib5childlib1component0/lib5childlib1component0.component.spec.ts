import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib1component0Component } from './lib5childlib1component0.component';

describe('Lib5childlib1component0Component', () => {
  let component: Lib5childlib1component0Component;
  let fixture: ComponentFixture<Lib5childlib1component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib1component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
