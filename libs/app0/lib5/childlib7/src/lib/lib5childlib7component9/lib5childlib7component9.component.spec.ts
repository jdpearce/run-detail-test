import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib7component9Component } from './lib5childlib7component9.component';

describe('Lib5childlib7component9Component', () => {
  let component: Lib5childlib7component9Component;
  let fixture: ComponentFixture<Lib5childlib7component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib7component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib7component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
