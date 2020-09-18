import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib5component3Component } from './lib5childlib5component3.component';

describe('Lib5childlib5component3Component', () => {
  let component: Lib5childlib5component3Component;
  let fixture: ComponentFixture<Lib5childlib5component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib5component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib5component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
