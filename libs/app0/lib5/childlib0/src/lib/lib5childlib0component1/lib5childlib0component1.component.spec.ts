import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib0component1Component } from './lib5childlib0component1.component';

describe('Lib5childlib0component1Component', () => {
  let component: Lib5childlib0component1Component;
  let fixture: ComponentFixture<Lib5childlib0component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib0component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
