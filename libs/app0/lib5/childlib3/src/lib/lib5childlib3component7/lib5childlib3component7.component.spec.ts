import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib3component7Component } from './lib5childlib3component7.component';

describe('Lib5childlib3component7Component', () => {
  let component: Lib5childlib3component7Component;
  let fixture: ComponentFixture<Lib5childlib3component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib3component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib3component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
