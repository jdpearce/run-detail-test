import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib9component7Component } from './lib5childlib9component7.component';

describe('Lib5childlib9component7Component', () => {
  let component: Lib5childlib9component7Component;
  let fixture: ComponentFixture<Lib5childlib9component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib9component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib9component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
