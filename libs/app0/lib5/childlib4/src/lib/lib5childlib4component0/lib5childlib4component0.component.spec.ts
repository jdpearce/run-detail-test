import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib4component0Component } from './lib5childlib4component0.component';

describe('Lib5childlib4component0Component', () => {
  let component: Lib5childlib4component0Component;
  let fixture: ComponentFixture<Lib5childlib4component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib4component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib4component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
