import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib9component4Component } from './lib5childlib9component4.component';

describe('Lib5childlib9component4Component', () => {
  let component: Lib5childlib9component4Component;
  let fixture: ComponentFixture<Lib5childlib9component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib9component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib9component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
