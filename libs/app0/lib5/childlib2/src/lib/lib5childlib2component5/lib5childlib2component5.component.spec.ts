import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib2component5Component } from './lib5childlib2component5.component';

describe('Lib5childlib2component5Component', () => {
  let component: Lib5childlib2component5Component;
  let fixture: ComponentFixture<Lib5childlib2component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib2component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib2component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
