import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib0component4Component } from './lib5childlib0component4.component';

describe('Lib5childlib0component4Component', () => {
  let component: Lib5childlib0component4Component;
  let fixture: ComponentFixture<Lib5childlib0component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib0component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib0component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
