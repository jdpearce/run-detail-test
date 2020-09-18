import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib7component5Component } from './lib5childlib7component5.component';

describe('Lib5childlib7component5Component', () => {
  let component: Lib5childlib7component5Component;
  let fixture: ComponentFixture<Lib5childlib7component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib7component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib7component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
