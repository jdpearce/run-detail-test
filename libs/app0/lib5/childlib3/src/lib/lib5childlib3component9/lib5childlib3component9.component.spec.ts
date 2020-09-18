import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib3component9Component } from './lib5childlib3component9.component';

describe('Lib5childlib3component9Component', () => {
  let component: Lib5childlib3component9Component;
  let fixture: ComponentFixture<Lib5childlib3component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib3component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib3component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
