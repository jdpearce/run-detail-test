import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib2component6Component } from './lib5childlib2component6.component';

describe('Lib5childlib2component6Component', () => {
  let component: Lib5childlib2component6Component;
  let fixture: ComponentFixture<Lib5childlib2component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib2component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib2component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
