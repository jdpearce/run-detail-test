import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib6component3Component } from './lib5childlib6component3.component';

describe('Lib5childlib6component3Component', () => {
  let component: Lib5childlib6component3Component;
  let fixture: ComponentFixture<Lib5childlib6component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib6component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib6component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
