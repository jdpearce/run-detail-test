import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib6component4Component } from './lib5childlib6component4.component';

describe('Lib5childlib6component4Component', () => {
  let component: Lib5childlib6component4Component;
  let fixture: ComponentFixture<Lib5childlib6component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5childlib6component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib6component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
