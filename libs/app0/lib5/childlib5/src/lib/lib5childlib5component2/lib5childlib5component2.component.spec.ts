import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib5component2Component } from './lib5childlib5component2.component';

describe('Lib5childlib5component2Component', () => {
  let component: Lib5childlib5component2Component;
  let fixture: ComponentFixture<Lib5childlib5component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib5component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib5component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
