import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib5component7Component } from './lib5childlib5component7.component';

describe('Lib5childlib5component7Component', () => {
  let component: Lib5childlib5component7Component;
  let fixture: ComponentFixture<Lib5childlib5component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib5component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib5component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
