import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib9component6Component } from './lib5childlib9component6.component';

describe('Lib5childlib9component6Component', () => {
  let component: Lib5childlib9component6Component;
  let fixture: ComponentFixture<Lib5childlib9component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib9component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib9component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
