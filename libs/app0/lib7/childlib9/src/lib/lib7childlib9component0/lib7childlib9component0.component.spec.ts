import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib9component0Component } from './lib7childlib9component0.component';

describe('Lib7childlib9component0Component', () => {
  let component: Lib7childlib9component0Component;
  let fixture: ComponentFixture<Lib7childlib9component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7childlib9component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
