import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib6component5Component } from './lib5childlib6component5.component';

describe('Lib5childlib6component5Component', () => {
  let component: Lib5childlib6component5Component;
  let fixture: ComponentFixture<Lib5childlib6component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib6component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib6component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
