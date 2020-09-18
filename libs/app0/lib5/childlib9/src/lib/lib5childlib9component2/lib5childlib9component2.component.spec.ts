import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib9component2Component } from './lib5childlib9component2.component';

describe('Lib5childlib9component2Component', () => {
  let component: Lib5childlib9component2Component;
  let fixture: ComponentFixture<Lib5childlib9component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib9component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib9component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
