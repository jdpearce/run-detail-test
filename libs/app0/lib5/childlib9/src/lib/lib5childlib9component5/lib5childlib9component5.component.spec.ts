import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib9component5Component } from './lib5childlib9component5.component';

describe('Lib5childlib9component5Component', () => {
  let component: Lib5childlib9component5Component;
  let fixture: ComponentFixture<Lib5childlib9component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib9component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib9component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
