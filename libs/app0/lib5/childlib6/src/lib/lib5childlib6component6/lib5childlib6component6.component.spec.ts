import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib6component6Component } from './lib5childlib6component6.component';

describe('Lib5childlib6component6Component', () => {
  let component: Lib5childlib6component6Component;
  let fixture: ComponentFixture<Lib5childlib6component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib6component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib6component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
