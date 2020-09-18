import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib3component3Component } from './lib5childlib3component3.component';

describe('Lib5childlib3component3Component', () => {
  let component: Lib5childlib3component3Component;
  let fixture: ComponentFixture<Lib5childlib3component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib3component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib3component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
