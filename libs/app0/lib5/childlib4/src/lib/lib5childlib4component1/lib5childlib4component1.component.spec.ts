import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib4component1Component } from './lib5childlib4component1.component';

describe('Lib5childlib4component1Component', () => {
  let component: Lib5childlib4component1Component;
  let fixture: ComponentFixture<Lib5childlib4component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib4component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib4component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
