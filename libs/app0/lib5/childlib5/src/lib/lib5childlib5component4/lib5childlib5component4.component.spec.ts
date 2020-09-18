import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib5component4Component } from './lib5childlib5component4.component';

describe('Lib5childlib5component4Component', () => {
  let component: Lib5childlib5component4Component;
  let fixture: ComponentFixture<Lib5childlib5component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib5component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib5component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
